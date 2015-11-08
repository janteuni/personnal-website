module.exports = {

  entry   : './index.js',
  output : {
    filename : './dist/bundle.js'
  },

  module : {
    loaders : [

      // load js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?stage=0'
        ]
      },

      // load scss
      {
        test: /\.scss/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          'sass'
        ]
      },

      // load fonts
      {
        test: /\.(woff|eot|svg|ttf|otf)$/,
        loader: 'url?limit=100000'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ISBROWSER: JSON.stringify(true)
      }
    })
  ],

};
