const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
      },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
      }
    ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' //node_modules下vue/dist/vue.esm.js文件的别名
        },
        extensions: ['.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
		//当使用HTML5 History API，任意的 404 响应可以提供为 index.html 页面
    //启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
        noInfo: true
    },
	//文件大小性能提示  error false warning
    performance: {
        hints: false
    },
	//源码类型 调试相关
    devtool: false,
//    externals: {
//      vue: 'Vue'
//    }
}

//node 环境变量
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
	 //在编译时可以配置一个全局常量
    new webpack.DefinePlugin({
            'process.env': {
				 //因为这个插件直接做的文本替换,给定的值必须包含字符串本身内的实际引号。通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。
                NODE_ENV: '"production"'
            }
        }),
		 //使用 UglifyJS 压缩JavaScript代码 另一种方式 webpack -p
   
  ])
}
