const server = require('./server')
require('./routes/default')

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
};

init()
