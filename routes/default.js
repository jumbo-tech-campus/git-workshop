const server = require('./../server')

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hallo wereld!'
  }
})
