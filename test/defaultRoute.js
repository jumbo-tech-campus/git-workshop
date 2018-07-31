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

  lab.it('returns Hallo wereld', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    }
    const response = await server.inject(injectOptions)

    expect(response.payload).to.equal('Hallo wereld!')
  });


  lab.it('returns Hallo with name from query param', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/?name=Jumbo',

    }
    const response = await server.inject(injectOptions)

    expect(response.payload).to.equal('Hallo Jumbo!')
  });
});
