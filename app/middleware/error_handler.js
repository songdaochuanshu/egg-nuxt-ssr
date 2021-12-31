/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2021-06-21 14:53:14
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-02 11:48:22
 * @FilePath: \eggDemo\app\middleware\error_handler.js
 */
'use strict';

module.exports = () => {

  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都会在app上出发一个error事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;

      // 如果时生产环境的时候 500错误的详细错误内容不返回给客户端
      const error = status === 500 && ctx.app.config.env === 'prod' ? '网络错误' : err.message;

      ctx.body = {
        msg: error,
        sta: status,
        data: [],
      };
    }
  };

};
