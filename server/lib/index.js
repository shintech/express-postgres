function respond (res, status, response) {
  res.status(status)
    .format({
      json: () => {
        res.write(JSON.stringify(response))
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

module.exports = {
  respond,
  promisify
}
