const jwt = require('jsonwebtoken')

function respond (res, status, body) {
  res.status(status)
    .format({
      json: () => {
        res.set({ 'Content-Type': 'application/json' })
        res.write(JSON.stringify(body))
        res.end()
      }
    })
}

async function promisify ({ logger, query }) {
  return new Promise(async function (resolve, reject) {
    try {
      resolve({
        response: await query,
        status: 200
      })
    } catch (err) {
      resolve({
        response: { error: err.message || err },
        status: (err.constructor.name === 'QueryResultError') ? 404 : 500
      })
    }
  })
}

function generateWebToken (user) {
  let retval = {
    username: user.username
  }

  return jwt.sign(retval, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })
}

module.exports = {
  respond,
  promisify,
  generateWebToken
}
