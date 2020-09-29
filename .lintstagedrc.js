module.exports = {
  '*.{js,json,yaml,md}': 'prettier --write',
  '*.{js}': 'eslint --fix',
  '*.*': 'cspell',
};
