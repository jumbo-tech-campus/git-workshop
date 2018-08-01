const server = require('./../server')

server.route({
  method: 'GET',
  path: '/products',
  handler: (request, h) => {
    return {}
  }
})
