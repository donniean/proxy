const { stringify } = require('qs');
const { writeSync } = require('clipboardy');

const defaultParams = require('./defaultParams');
const params = require('./params');

function generateURL() {
  const object = { ...defaultParams, ...params };
  const string = stringify(object);
  const url = `http://127.0.0.1:25500/sub?${string}`;
  return url;
}

function copyURLToClipboard(url) {
  // eslint-disable-next-line no-console
  console.log(url);
  writeSync(url);
}

module.exports = { generateURL, copyURLToClipboard };
