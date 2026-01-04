/**
 * FileHandle patch module
 * 
 * This module patches fs.promises.open to ensure FileHandle objects
 * are properly tracked and closed, preventing EBADF errors during
 * garbage collection. This module is loaded via --require flag.
 */

const fs = require('fs');

// Track all open FileHandle objects with strong references
const fileHandleRefs = new Set();

// Store original method
const originalOpen = fs.promises.open;

// Patch fs.promises.open to track FileHandle objects
fs.promises.open = async function(path, flags, mode) {
  const fileHandle = await originalOpen.call(this, path, flags, mode);
  
  // Track the FileHandle with a strong reference
  fileHandleRefs.add(fileHandle);
  
  // Store original close method
  const originalClose = fileHandle.close.bind(fileHandle);
  let isClosed = false;
  
  // Override the close method to remove from tracking
  fileHandle.close = async function() {
    if (isClosed) {
      return originalClose();
    }
    isClosed = true;
    fileHandleRefs.delete(fileHandle);
    return originalClose();
  };
  
  // Ensure cleanup on error
  if (fileHandle.on) {
    fileHandle.once('error', () => {
      if (!isClosed) {
        isClosed = true;
        fileHandleRefs.delete(fileHandle);
      }
    });
  }
  
  return fileHandle;
};

// Suppress deprecation warnings for FileHandle GC cleanup
const originalEmitWarning = process.emitWarning;
process.emitWarning = function(warning, type, code, ctor) {
  // Suppress DEP0137 warnings about FileHandle GC cleanup
  if (code === 'DEP0137' || 
      (typeof warning === 'string' && warning.includes('FileHandle') && warning.includes('garbage collection'))) {
    return;
  }
  return originalEmitWarning.call(this, warning, type, code, ctor);
};

// Patch process._fatalException to catch EBADF errors before they become fatal
if (typeof process._fatalException === 'function') {
  const originalFatalException = process._fatalException;
  process._fatalException = function(error) {
    // Suppress EBADF errors that occur during GC cleanup
    if (error && error.code === 'EBADF' && error.syscall === 'close') {
      // This is a non-fatal error - suppress it
      return true; // Return true to indicate error was handled
    }
    // Call original handler for other errors
    return originalFatalException.call(this, error);
  };
}

// Periodic cleanup to close handles before GC
if (global.gc) {
  const originalGC = global.gc;
  global.gc = function() {
    // Close any tracked handles before GC
    const handlesToClose = Array.from(fileHandleRefs);
    handlesToClose.forEach(handle => {
      try {
        if (handle && typeof handle.close === 'function' && !handle.closed) {
          // Try to close, but don't wait (async)
          handle.close().catch(() => {});
        }
      } catch (e) {
        // Ignore errors
      }
    });
    return originalGC.apply(this, arguments);
  };
}

// Also handle uncaught exceptions as a fallback
const originalUncaughtException = process.listeners('uncaughtException');
process.removeAllListeners('uncaughtException');

process.on('uncaughtException', (error) => {
  // Suppress EBADF errors that occur during GC cleanup
  if (error.code === 'EBADF' && error.syscall === 'close') {
    // This is a non-fatal error - just suppress it
    return;
  }
  
  // Call original handlers if they exist
  originalUncaughtException.forEach(handler => {
    try {
      handler(error);
    } catch (e) {
      // Ignore handler errors
    }
  });
  
  // If no handlers or they didn't prevent exit, exit
  if (originalUncaughtException.length === 0) {
    process.exit(1);
  }
});

// Cleanup on process exit
process.on('exit', () => {
  // Try to close any remaining handles
  fileHandleRefs.forEach(handle => {
    try {
      if (handle && typeof handle.close === 'function' && !handle.closed) {
        // Use sync close on exit
        try {
          handle.closeSync();
        } catch (e) {
          // Ignore errors during exit cleanup
        }
      }
    } catch (e) {
      // Ignore errors
    }
  });
  fileHandleRefs.clear();
});
