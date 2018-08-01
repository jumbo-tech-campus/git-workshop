'use strict';

var Hapi = require('hapi')

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000
})

module.exports = server
