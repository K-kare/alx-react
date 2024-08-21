const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
module: {
    rules: [
      {
        test: /\.css$/i,  // Regex to match .css files
        use: [
          'style-loader',  // Injects CSS into the DOM
          'css-loader',    // Resolves CSS imports
        ],
      },
};
