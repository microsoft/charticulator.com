let path = require("path");
let webpack = require("webpack");

module.exports = {
    entry: {
        viewer: "./dist/scripts/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "../"),
        // Export the app as a global variable "Charticulator"
        libraryTarget: "var",
        library: "CharticulatorTutorial"
    },
    resolve: {
        alias: {
            "data": __dirname + "/data",
            "resources": __dirname + "/resources"
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};