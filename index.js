var babel = require("babel-core")

// var presets = [
// 	require.resolve("babel-preset-es2015-ie"),
// 	require.resolve("babel-preset-react"),
// 	require.resolve("babel-preset-stage-0")
// ]
// var plugins = [
// 	require.resolve("babel-plugin-add-module-exports"),
// 	require.resolve("babel-plugin-transform-decorators-legacy"),
//     require.resolve("babel-plugin-transform-runtime")
// ]

module.exports = function(content, file, conf){
    // conf = conf || {}
    // conf.presets = conf.presets ? conf.presets(presets) : presets
    // conf.plugins = conf.plugins ? conf.plugins(plugins) : plugins
    var result = babel.transform(content, conf);
    return result.code;
}