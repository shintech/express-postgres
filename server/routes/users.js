const { respond, promisify } = require('../lib')
const bcrypt = require('bcryptjs')

module.exports = function ({ db, logger }) {
  return {
    fetchAll: async (req, res) => {
      let query

      try {
        query = await promisify({ logger, query: db.any('SELECT * from users ORDER BY id DESC') })
      } catch (err) {
        query = err
      }
      respond(res, query.status, query.response)
    },

    fetchOne: async (req, res) => {
      const itemId = parseInt(req.params.id)

      let query

      try {
        query = await promisify({ logger, query: db.one('SELECT * FROM users WHERE id = $1', [itemId]) })
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    },

    addOne: async (req, res) => {
      let query
      const encryptedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)

      const attrs = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: encryptedPassword
      }

      try {
        query = await promisify({ logger, query: db.one('insert into users( first_name, last_name, email, username, password )' + 'values( ${first_name}, ${last_name}, ${email}, ${username}, ${password} ) returning id', attrs) }) // eslint-disable-line
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    },

    login: async (req, res) => {
      let response = {
        status: 500,
        body: {}
      }

      if (!req.body.username || req.body.username === '') { return respond(res, 401, { authorized: false }) }

      try {
        let query = await promisify({ logger, query: db.one('SELECT id, username, password FROM users WHERE username = $1', [req.body.username]) })

        if (!query.response.error) {
          response = (bcrypt.compareSync(req.body.password, query.response.password)) ? { status: 200, body: { authorized: true } } : { status: 401, body: { authorized: false } }
        } else {
          response = { status: 401, body: { authorized: false } }
        }
      } catch (err) {
        logger.error(err.message)

        response = {
          status: 401,
          body: {
            authorized: false
          }
        }
      }

      respond(res, response.status, response.body)
    }
  }
}

/*
  password = $2a$10$oTHc103GQnIu.jvMN2XKA.o1oqv3SMK1pgm7Fl9aN96QUSVdkEe8a
*/
