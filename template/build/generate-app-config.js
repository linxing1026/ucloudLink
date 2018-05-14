const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

const config = require('./../config/app-config');

function createAppConfig(compilation){
    return JSON.stringify(
        Object.assign({
            _hash:compilation.hash,//用于版本校验
        },config)
    );
}

module.exports = ()=>{
    return new GenerateAssetPlugin({
        filename:'config/app-config.json',
        fn:(compilation,cb)=>{
            cb(null, createAppConfig(compilation))
        }
    });
}
