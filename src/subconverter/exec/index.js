/* const { platform } = require('os');
const { execFile } = require('child_process');
const { resolve, join } = require('path');

const p = platform();
const subconverterPath = join(resolve(), 'subconverter');

let path = '';
if (p === 'darwin') {
  path = 'darwin64';
} else if (p === 'win32') {
  path = 'win64';
}
console.log(join(subconverterPath, path, 'subconverter'));
execFile(
  join(subconverterPath, path, 'subconverter'),
  null,
  null,
  (...args) => {
    console.log(args);
  }
);
 */
