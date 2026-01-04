#!/usr/bin/env node

/**
 * Launcher script that loads the FileHandle patch and runs npx sanity
 * This is used by fix-filehandles.sh to properly handle paths with spaces
 */

const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const os = require('os');

// Get the absolute path to the patch module
const patchModule = path.resolve(__dirname, 'filehandle-patch.js');

// NODE_OPTIONS has issues with paths containing spaces
// Create a symlink in /tmp (no spaces) and use that instead
const tmpDir = os.tmpdir();
const symlinkPath = path.join(tmpDir, `sanity-filehandle-patch-${process.pid}.js`);

let finalNodeOptions;

// Clean up any existing symlink and create a new one
try {
  if (fs.existsSync(symlinkPath)) {
    fs.unlinkSync(symlinkPath);
  }
  fs.symlinkSync(patchModule, symlinkPath);
  
  // Clean up on exit
  process.on('exit', () => {
    try {
      if (fs.existsSync(symlinkPath)) {
        fs.unlinkSync(symlinkPath);
      }
    } catch (e) {
      // Ignore cleanup errors
    }
  });
  
  // Set NODE_OPTIONS to load the patch via symlink (no spaces in path)
  const existingNodeOptions = process.env.NODE_OPTIONS || '';
  const requireFlag = `--require ${symlinkPath}`;
  finalNodeOptions = existingNodeOptions 
    ? `${existingNodeOptions} ${requireFlag}`
    : requireFlag;
} catch (error) {
  // If symlink fails, try with escaped path (fallback)
  console.warn('Warning: Could not create symlink, using direct path (may fail with spaces)');
  const existingNodeOptions = process.env.NODE_OPTIONS || '';
  const escapedPatchModule = patchModule.replace(/\\/g, '\\\\').replace(/ /g, '\\ ');
  const requireFlag = `--require ${escapedPatchModule}`;
  finalNodeOptions = existingNodeOptions 
    ? `${existingNodeOptions} ${requireFlag}`
    : requireFlag;
}

// Now run npx sanity with all arguments
// The patch will be loaded in child processes via NODE_OPTIONS
const args = process.argv.slice(2);
const proc = spawn('npx', ['sanity', ...args], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: {
    ...process.env,
    NODE_OPTIONS: finalNodeOptions
  }
});

proc.on('close', (code) => {
  process.exit(code || 0);
});

proc.on('error', (e) => {
  console.error('Error:', e.message);
  process.exit(1);
});
