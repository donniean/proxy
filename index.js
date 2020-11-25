const { generateURL, copyURLToClipboard } = require('./src/subconverter/url');

copyURLToClipboard(generateURL());
