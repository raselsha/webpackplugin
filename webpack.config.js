const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    frontend: './assets/src/frontend.js',  // Frontend JS entry point
    admin: './assets/src/admin.js',        // Backend JS entry point
  },
  output: {
	filename: (pathData) => {
        return pathData.chunk.name === 'frontend'
        ? 'frontend.bundle.js'  // Frontend JS output
        : 'admin.bundle.js';     // Backend JS output
    },
	path: path.resolve(__dirname, 'assets/js'),
  },
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.scss$/, // Handle .scss files
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',   // Injects styles into DOM
            'sass-loader',     // Translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Use globally installed Sass
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: (pathData) => {
            return pathData.chunk.name === 'frontend'
            ? '../css/frontend.css'   // Frontend CSS output
            : '../css/admin.css';      // Backend CSS output
        },
    }),
  ],
  watch: true,
};
