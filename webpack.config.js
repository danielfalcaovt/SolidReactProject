const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development', // subentendível
  entry: './src/main/index.tsx', // primeiro script à rodar na aplicação
  output: {
    path: path.join(__dirname, 'public/js'), // pasta aonde será gerada o resultado em js do bundle
    publicPath: '/public/js', // caminho do public
    filename: 'bundle.js' // nome do arquivo
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'scss'], // extensões para o bundle
    alias: {
      '@': path.join(__dirname, 'src') // sempre que encontrar um @ substituir pela pasta source
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }, // aonde o dev-server vai procurar para rodar o servidor local
    devMiddleware: {
      writeToDisk: true // gravar os arquivos do bundle no disco, invés da memória
    },
    historyApiFallback: true,
    port: 5173
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin() // evitar cache
  ]
}
