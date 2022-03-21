import { merge } from 'webpack-merge'

import common from './webpack.common.js'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'

export default merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
})
