const request = require('request')
const dir = require('require-dir')
const debug = require('debug')('vensure')

module.exports = dir('./api', {
  camelcase: true
})
