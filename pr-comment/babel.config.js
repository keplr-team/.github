module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: [
    ['const-enum'],
    ['replace-ts-export-assignment'],
    ['@babel/plugin-transform-typescript'],
  ],
};
