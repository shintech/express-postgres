const routes = require('./routes')
const router = require('express').Router()

module.exports = function (config) {
  router.route('/users')
    .get(routes.users(config).fetchAll)
    .post(routes.users(config).addOne)

  router.route('/users/:id')
    .get(routes.users(config).fetchOne)

  router.route('/users/:id/login')
    .post(routes.users(config).login)

  return router
}
