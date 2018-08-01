'use strict'

const Lab = require('lab')
const expect = require('code').expect
const server = require('./../server')
require('./../routes/products')

const lab = (exports.lab = Lab.script())
const { describe, it } = lab;

describe('default route,', () => {
  it('returns 200 status', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/products',
    }
    const response = await server.inject(injectOptions)

    expect(response.statusCode).to.equal(200)
  });
});
