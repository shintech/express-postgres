const { respond, queryDB } = require('../lib')

module.exports = function (config) {
  let query

  return {
    fetchAll: async (req, res) => {
      try {
        query = await queryDB(config, req.db.any('SELECT * from posts'))
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    },

    fetchOne: async (req, res) => {
      const itemId = parseInt(req.params.id)

      let query

      try {
        query = await queryDB(config, req.db.one('SELECT * FROM posts WHERE id = $1', itemId))
      } catch (err) {
        query = err
      }

      respond(res, query.status, query.response)
    }
  }
}
