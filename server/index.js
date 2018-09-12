const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const compression = require('compression')
const morgan = require('morgan')
const configRouter = require('./router')
const configDB = require('./db')

const environment = process.env['NODE_ENV'] || 'development'
const port = process.env['PORT'] || 8000

const logger = require('./logger')({ environment })

const app = express()
const db = configDB({ logger })

if (environment === 'development') app.use(morgan('dev'))

app.use('/api/*', (req, res, next) => {
  req.db = db
  next()
})

app.use('/public', express.static(path.join(__dirname, '../public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(compression())
  .use('/api', configRouter({ db, logger }))

app.listen(port, () => {
  logger.info(`listening on ${port}...`)
})

module.exports = app
