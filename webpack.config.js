const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: 'angularRemote',
    publicPath: 'http://localhost:4201/',

  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/pages/user-detail/user-detail.module.ts', // ✅ Asegúrate de que el path es correcto
      },
      shared: {
        react: {
          eager: true,
        },
        '@angular/core': { singleton: true, strictVersion: true},
        '@angular/common': { singleton: true, strictVersion: true},
        '@angular/router': { singleton: true, strictVersion: true }
      }

    })
  ]

};
