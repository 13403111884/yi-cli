#!/usr/bin/env node
require('babel-register') ({
  presets: [ 'env' ]
})

module.exports = require('./yi-cli.js')