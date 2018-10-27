const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'
const configDB = require('./server/db')

const logger = require('shintech-logger')({ environment })
const db = configDB({ logger, environment })
const server = require('./server')({ db, logger, environment, port })
const pkg = require('./package.json')

server.listen(port, host, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
})
