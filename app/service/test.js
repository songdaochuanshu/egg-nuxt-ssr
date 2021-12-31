'use strict';

const { Service } = require('egg')

class TestService extends Service {
  async test() {
    return 'hi~ 松岛川树'
  }
}

module.exports = TestService