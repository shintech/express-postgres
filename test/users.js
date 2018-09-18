/* eslint-env mocha  */

const chai = require('chai')
const chaiHttp = require('chai-http')
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const configDB = require('../server/db')

const logger = require('../server/logger')({ environment })
const db = configDB({ logger, environment })
const server = require('../server')({ db, logger, environment, port })

chai.use(chaiHttp)
const expect = chai.expect

describe('INIT', () => {
  before(function () {
    db.none('TRUNCATE users RESTART IDENTITY')
  })

  it('should not contain data', done => {
    chai.request(server)
      .get('/api/users')
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res.body).to.be.empty // eslint-disable-line
        done()
      })
  })
})

describe('USERS', function () {
  beforeEach(function () {
    const attrs = {
      first_name: 'first_name',
      last_name: 'last_name',
      username: 'username',
      password: 'password',
      email: 'email@example.org'
    }

    db.one('insert into users( first_name, last_name, email, username, password )' + 'values( ${first_name}, ${last_name}, ${email}, ${username}, ${password} ) returning id', attrs) // eslint-disable-line
  })

  afterEach(done => {
    db.none('TRUNCATE users RESTART IDENTITY')
    done()
  })

  it('GET /api/users', done => {
    chai.request(server).get('/api/users')
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })

  it('GET /api/user/:id', done => {
    chai.request(server)
      .get('/api/users')
      .end(function (error, response) { // eslint-disable-line
        expect(error).to.be.null // eslint-disable-line
        chai.request(server)
          .get(`/api/users/${response.body[0].id}`)
          .end(function (err, res) {
            expect(err).to.be.null // eslint-disable-line
            expect(res).to.have.status(200)
            done()
          })
      })
  })

  it('POST /api/user', done => {
    const attrs = {
      first_name: 'first_name',
      last_name: 'last_name',
      username: 'username',
      password: 'password',
      email: 'email@example.org'
    }

    chai.request(server)
      .post('/api/users')
      .send(attrs)
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })
})
