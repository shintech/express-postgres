const { respond, queryDB } = require('../lib')

module.exports = function ({ db, logger }) {
  let query

  return {
    fetchAll: async (req, res) => {
      try {
        query = await queryDB({ logger, query: db.any('SELECT * from users ORDER BY id DESC') })
      } catch (err) {
        query = err
      }
      respond(res, query.status, query.response)
    },

    fetchOne: async (req, res) => {
      const itemId = parseInt(req.params.id)

      let query

      try {
        query = await queryDB({ logger, query: db.one('SELECT * FROM users WHERE id = $1', itemId) })
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    },

    addOne: async (req, res) => {
      let query

      try {
        query = await queryDB({ logger, query: db.one('insert into users( first_name, last_name, email, username, password )' + 'values( ${first_name}, ${last_name}, ${email}, ${username}, ${password} ) returning id', req.body) }) // eslint-disable-line
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    }
  }
}
