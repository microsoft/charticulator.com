// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

// Nodejs version 6.0+
var fs = require("fs-extra");
var jsyaml = require("js-yaml");
var path = require("path");

var commands = {};

commands.cleanup = function() {
    return fs.remove("dist");
};

commands.makedirs = function() {
    return Promise.all([
        fs.mkdirs("dist/scripts"),
        fs.mkdirs("dist/styles")
    ]).then(() => {
        return Promise.all([
            fs.copy("node_modules/react/umd/react.production.min.js", "dist/scripts/react.production.min.js"),
            fs.copy("node_modules/react-dom/umd/react-dom.production.min.js", "dist/scripts/react-dom.production.min.js"),
            fs.copy("node_modules/d3/build/d3.min.js", "dist/scripts/d3.min.js")
        ]);
    });
};

commands.bundle = function() {
    return fs.remove("bundle").then(() => fs.mkdirs("bundle").then(() => {
        return Promise.all([
            fs.copy("dist", "bundle/dist"),
            fs.copy("index.html", "bundle/index.html"),
            fs.copy("data", "bundle/data")
        ]);
    }));
}

function mainFunction(list) {
    let p = null;
    list.forEach(function(item) {
        let runCommand = () => {
            console.log("build_utils.js: " + item);
            return commands[item]();
        };
        if(p == null) {
            p = runCommand();
        } else {
            p = p.then(runCommand);
        }
    });
    return p;
}

mainFunction(process.argv.slice(2)).then(() => {
});