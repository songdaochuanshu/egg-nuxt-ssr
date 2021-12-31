/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 03:44:21
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:45:54
 * @FilePath: \test\app\core\base_controller.js
 */
const { Controller } = require('egg');
class BaseController extends Controller {

  Time = (new Date()).getTime();

  success({ success, code, data }) {
    this.ctx.body = {
      success: success || true,
      code: code || 200,
      data,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }

  /**
   * 获取前端传入的数据
   */
  async fetchData() {
    const ctx = this.ctx;
    const methods = ctx.request.method;
    let params;
    switch (methods.toLocaleUpperCase()) {
      case 'GET':
        params = ctx.query;
        break;
      case 'POST':
      case 'PUT':
      case 'DELETE':
        params = ctx.request.body;
        break;
      default:
        break;
    }
    return params;
  }
}
module.exports = BaseController;