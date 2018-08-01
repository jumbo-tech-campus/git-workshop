const server = require('./server')
require('./routes/default')
require('./routes/products')

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
};

init()
