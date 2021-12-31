/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-12 23:55:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 01:27:38
 * @FilePath: \test\app\controller\test.js
 */
'use strict';

const { Controller } = require('egg');

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    let msg = await ctx.service.test.test();
    ctx.body = msg;
  }
}

module.exports = TestController;