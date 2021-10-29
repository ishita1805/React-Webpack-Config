const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
          loader: 'babel-loader',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          }
    ]
    },
    devServer:{
        port: 3000,
    }
};