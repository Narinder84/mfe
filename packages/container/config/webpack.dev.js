const {merge} = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commenConfig = require('./webpack.common')

const packageJson = require('../package.json')

const devConfig={
    mode:'development',
    devServer:{
        port:8082,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared : packageJson.dependencies
        }),
       
    ]
}

module.exports = merge(commenConfig,devConfig);