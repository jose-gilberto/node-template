'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')

const server = require('../app')

chai.use(chaiHttp)
const should = chai.should()

describe('User API', () => {
    it('Deve retornar uma lista de usuários', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                done()
            })
    })
})