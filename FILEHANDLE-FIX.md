# FileHandle EBADF Error Fix

## Problem

When running Sanity dataset imports, you may encounter errors like:

```
(node:47294) [DEP0137] DeprecationWarning: Closing a FileHandle object on garbage collection is deprecated.
[Error: EBADF: Closing file descriptor 24 on garbage collection failed, close]
```

This happens because the Sanity CLI creates FileHandle objects (from `fs.promises.open()`) that aren't properly closed, causing Node.js to close them during garbage collection.

## Solution

Use the `fix-filehandles.js` wrapper script to patch FileHandle handling and ensure proper cleanup.

## Usage

Instead of running:
```bash
npx sanity dataset import ~/Desktop/kmvs-old multilingual --replace
```

**Node.js Wrapper**
```bash
node fix-filehandles.js dataset import ~/Desktop/kmvs-old multilingual --replace
```

## What It Does

1. **Patches `fs.promises.open`**: Tracks all FileHandle objects created during the import
2. **Ensures proper cleanup**: Overrides the `close()` method to remove handles from tracking
3. **Suppresses warnings**: Filters out DEP0137 deprecation warnings about FileHandle GC
4. **Handles errors gracefully**: Catches EBADF errors and attempts cleanup before they become fatal

## Alternative Solutions

If the wrapper doesn't work, try:

1. **Increase file descriptor limit**:
   ```bash
   ulimit -n 4096
   npx sanity dataset import ~/Desktop/kmvs-old multilingual --replace
   ```

2. **Use Node.js flags**:
   ```bash
   node --max-old-space-size=4096 --expose-gc npx sanity dataset import ~/Desktop/kmvs-old multilingual --replace
   ```

3. **Import in smaller batches**: Split your import data into smaller chunks if possible

## Technical Details

The fix works by:
- Intercepting `fs.promises.open()` calls
- Maintaining strong references to FileHandle objects
- Ensuring handles are closed explicitly before garbage collection
- Suppressing non-fatal EBADF errors that occur during cleanup
