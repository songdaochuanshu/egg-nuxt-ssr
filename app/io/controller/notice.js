/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2021-09-18 00:10:49
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-06 07:35:53
 * @FilePath: \egg-blog\app\io\controller\notice.js
 */
'use strict';

const Controller = require('egg').Controller;

class NoticeController extends Controller {

  //点赞通知
  async like() {
    const { ctx } = this;
    const query = ctx.args[0] || {};
    ctx.socket.emit('like', query);
  }

  //评论通知
  async comment() {
    const { ctx } = this;
    const query = ctx.args[0] || {};
    ctx.socket.emit('comment', query);
  }

  //关注通知
  async focus() {
    const { ctx } = this;
    const query = ctx.args[0] || {};
    ctx.socket.emit('focus', query);
  }

  //留言通知
  async message() {
    const { ctx } = this;
    const query = ctx.args[0] || {};
    ctx.socket.emit('message', query);
  }

}

module.exports = NoticeController;

