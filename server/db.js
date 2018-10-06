const promise = require('bluebird')
const pg = require('pg-promise')

module.exports = ({ logger, environment }) => {
  let postgresURI = process.env['DATABASE_URL'] || `postgres://postgres:postgres@localhost:5432/api_${environment}`
  let options = {
    promiseLib: promise
  }

  options.noWarnings = (environment === 'test')

  const pgp = pg(options)

  const connectionString = postgresURI
  const databaseName = connectionString.split('/')

  if (environment !== 'test') { logger.info(`Connected to database: ${databaseName[databaseName.length - 1]}...`) }

  const init = pgp(connectionString)

  return init
}
