const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/pages/login/login.js',
    entregar: './src/pages/entregar/entregar.js',
    tiendas: './src/pages/tiendas/tiendas.js',
    ruta: './src/pages/ruta/ruta.js',
    entregas: './src/pages/entregas/entregas.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};