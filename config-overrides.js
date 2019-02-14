// module.exports = function override(config, env) {
    
//     return config;
//   };


// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


 module.exports = function override(config, env) {
   // do stuff with the webpack config...
   return config;
 };
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
    //  style: 'css',
    style: true,
   }),
    addLessLoader({
       javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' },
    //    这里利用了 less-loader 的 modifyVars 来进行主题配置
     }),
 );