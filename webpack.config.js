const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: "./js/script.js",
    output: {
      filename: "./bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules:[
            // CSS LOADERS
            {
              test: /\.scss$/,
              use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader"}
                ],
              exclude: "/node_modules" 
            },
            // FILE LOADER
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              use: [
                {loader: 'file?name=public/fonts/[name].[ext]'}
                ],
              exclude: "/node_modules"
            }          
        ]
    }
};