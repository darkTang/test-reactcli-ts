import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import { Configuration } from "webpack";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import 'webpack-dev-server'

const devConfig: Configuration = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
})

export default devConfig