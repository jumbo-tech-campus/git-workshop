'use strict'

const Lab = require('lab')
const expect = require('code').expect
const server = require('./../server')
require('./../routes/default')

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script())

lab.describe('default route,', () => {
  lab.it('returns 200 status', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    }
    const response = await server.inject(injectOptions)

    expect(response.statusCode).to.equal(200)
  });
});
