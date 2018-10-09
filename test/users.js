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
  before(async function () {
    await db.none('TRUNCATE users RESTART IDENTITY')
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
  beforeEach(async function () {
    const attrs = {
      first_name: 'first_name',
      last_name: 'last_name',
      username: 'username',
      password: '$2a$10$oTHc103GQnIu.jvMN2XKA.o1oqv3SMK1pgm7Fl9aN96QUSVdkEe8a',
      email: 'email@example.org'
    }

    await db.one('insert into users( first_name, last_name, email, username, password )' + 'values( ${first_name}, ${last_name}, ${email}, ${username}, ${password} ) returning id', attrs) // eslint-disable-line

    // "password" = $2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG
  })

  afterEach(async () => {
    await db.none('TRUNCATE users RESTART IDENTITY')
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
        expect(response).to.have.status(200)
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

  it('POST /api/users/login -> Expect authorization to succeed...', done => {
    const attrs = {
      username: 'username',
      password: 'password'
    }

    chai.request(server)
      .post('/api/users/login')
      .send(attrs)
      .end(function (err, res) {
        expect(err).to.be.null  // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body.authorized).to.be.true  // eslint-disable-line
        done()
      })
  })

  it('POST /api/users/login -> Expect authorization to fail if no username is provided...', done => {
    const attrs = {
      username: '',
      password: 'password'
    }

    chai.request(server)
      .post('/api/users/login')
      .send(attrs)
      .end(function (err, res) {
        expect(err).to.be.null  // eslint-disable-line
        expect(res).to.have.status(401)
        expect(res.body.authorized).to.be.false  // eslint-disable-line
        done()
      })
  })

  it('POST /api/users/login -> Expect authorization to fail with incorrect password...', done => {
    const attrs = {
      username: 'username',
      password: 'incorrect'
    }

    chai.request(server)
      .post('/api/users/login')
      .send(attrs)
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(401)
        expect(res.body.authorized).to.be.false // eslint-disable-line
        done()
      })
  })
})
