import { merge } from 'webpack-merge'
import Webpackbar from 'webpackbar'
import common from './webpack.common.js'

export default merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: '8888',
  },
  plugins: [new Webpackbar()],
	stats: {
		modules: false
	}
})
