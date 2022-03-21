import HtmlWebpackPlugin from 'html-webpack-plugin'
import TersetWebpackPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { URL } from 'url' // in Browser, the URL in native accessible on window

export default {
  entry: {
    // index: path.join(__dirname, "../src/index.js")
    index: new URL('../src/index.js', import.meta.url).pathname,
  },
  output: {
    filename: '[name].[contenthash:4].js', // !! webpack的 chunkhash没办法和 hotModuleReplacementPlugin一起使用
    // path: path.join(__dirname, '../dist') // distribution 发行版
    path: new URL('../dist/', import.meta.url).pathname,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: new URL('../index.html', import.meta.url).pathname,
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{ loader: 'url-loader', options: { limit: +10240 } }],
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' },
    ],
  },
  optimization: {
    minimizer: [
      new TersetWebpackPlugin({
        extractComments: false,
        minify: TersetWebpackPlugin.esbuildMinify, // esbuild 提速
      }),
    ],
  },
  externals: {
    // 外部扩展
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}
