const users = require('./users')

module.exports = {
  users: config => ({ ...users(config) })
}
