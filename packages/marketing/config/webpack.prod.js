
const {merge} = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commenConfig = require('./webpack.common');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodCofig = {
    mode:'production',
    output:{
        filename:'[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared : packageJson.dependencies,
          
        })
    ]
}

module.exports =merge(commenConfig,prodCofig);
