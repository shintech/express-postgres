const routes = require('./routes')
const router = require('express').Router()

module.exports = function (config) {
  router.route('/posts')
    .get(routes.posts(config).fetchAll)
    .post(routes.posts(config).addOne)

  router.route('/posts/:id')
    .get(routes.posts(config).fetchOne)

  return router
}
