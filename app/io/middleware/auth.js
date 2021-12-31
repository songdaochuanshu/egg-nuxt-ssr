/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 03:45:08
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:46:22
 * @FilePath: \test\app\io\middleware\auth.js
 */
'use strict';

const room = 'default_room';

module.exports = app => {

  return async (ctx, next) => {
    const { socket } = ctx;
    //第一次连接
    socket.join(room);
    socket.on('join', data => {
      socket.emit('online', data);
    });

    await next();

    ctx.socket.emit('online', `用户 ${ctx.socket.id} 已离线!`);
  };
};
