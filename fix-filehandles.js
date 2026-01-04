#!/usr/bin/env node

/**
 * Fix for Sanity CLI FileHandle EBADF errors
 * 
 * This script uses Node's --require flag to inject a patch module
 * into the child process, ensuring FileHandle objects are properly
 * tracked and closed.
 */

const { spawn } = require('child_process');
const path = require('path');

// Get the absolute path to the patch module
const patchModule = path.resolve(__dirname, 'filehandle-patch.js');

// Run the Sanity command
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node fix-filehandles.js <sanity-command> [args...]');
  console.error('Example: node fix-filehandles.js dataset import ~/Desktop/kmvs-old multilingual --replace');
  process.exit(1);
}

console.log('Starting Sanity command with FileHandle fix...');
console.log('Command: npx sanity', args.join(' '));
console.log('');

// Use the launcher script which properly handles paths with spaces
const launcherPath = path.resolve(__dirname, 'sanity-launcher.js');

const sanityProcess = spawn('node', [launcherPath, ...args], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: process.env
});

sanityProcess.on('close', (code) => {
  process.exit(code || 0);
});

sanityProcess.on('error', (error) => {
  console.error('Failed to start Sanity process:', error.message);
  process.exit(1);
});
