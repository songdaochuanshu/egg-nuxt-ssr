/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 03:45:08
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:46:16
 * @FilePath: \test\app\io\middleware\filter.js
 */
'use strict';

module.exports = () => {
  return async (ctx, next) => {
    console.log("监听所有事件",ctx.packet);
    ctx.socket.emit('all', ctx.packet);

    await next();
    // console.log('数据包响应!');
  };
};
