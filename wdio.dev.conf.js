var defaults = require('./wdio.conf').config;
var _ = require('lodash');

var overrides = {
    baseUrl: "http://dev.example.com", //set the environment url here
    specs: [
        './test/specs/login.e2e.js'
    ]

}

exports.config = _.defaultsDeep(overrides, defaults);