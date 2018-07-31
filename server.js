'use strict';

var Hapi = require('hapi')

const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
})

module.exports = server
