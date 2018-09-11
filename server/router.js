const routes = require('./routes')
const router = require('express').Router()

module.exports = function (config) {
  router.route('/posts')
    .get(routes.posts(config).fetchAll)

  router.route('/posts/:id')
    .get(routes.posts(config).fetchOne)

  return router
}
