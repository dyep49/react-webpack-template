function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  
  return sources
}

module.exports = {
  entry: {
    helloWorld: getEntrySources([
      './public/src/js/helloworld'
    ])
  },
  output: {
    filename: 'public/build/js/[name].js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: /public/,
        loaders: [ 
          'style',
          'css',
          'sass?outputStyle=expanded'
        ]
      }
    ]
  }
};
