const promise = require('bluebird')
const pg = require('pg-promise')

module.exports = ({ logger, environment }) => {
  let postgresURI = process.env['DATABASE_URL'] || `postgres://postgres:postgres@localhost:5432/api_${environment}`

  const pgp = pg({
    promiseLib: promise
  })

  const connectionString = postgresURI
  const databaseName = connectionString.split('/')

  logger.info(`Connected to database: ${databaseName[databaseName.length - 1]}...`)

  const init = pgp(connectionString)

  return init
}
