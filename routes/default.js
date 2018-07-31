const server = require('./../server')

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    var response = encodeURIComponent(request.query.name)
    if (response === 'undefined') {
          response = 'wereld'
    }
    if (response !== 'Appie'){
      return `Hallo ${response}!`
    } else {
      return h.response().code(403)
    }

  }
})
