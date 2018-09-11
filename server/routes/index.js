const posts = require('./posts')

module.exports = {
  posts: config => ({ ...posts(config) })
}
