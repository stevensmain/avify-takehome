/* eslint-env node */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const host = 'localhost';
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  target: 'web',
  entry: {
    app: ['./index.tsx']
  },
  output: {
    filename: '[name]-[contenthash:6].bundle.js',
    path: path.join(__dirname, './build/www'),
    publicPath: `http://${host}:${port}/`
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.([jt])s(x?)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader?name=img/[name]-[contenthash:6].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:6].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    port,
    host,
    static: path.resolve(__dirname, 'src'),
    proxy: {
      '/api': {
        target: 'https://api.carbonintensity.org.uk',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
