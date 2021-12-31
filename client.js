/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-31 22:46:53
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-31 22:55:04
 * @FilePath: \nuxt-egg-ssr\client.js
 */
'use strict';

const socket = require('socket.io-client')('http://127.0.0.1:3000');

const userInfo = {
  u_id: 1,
  u_name: '松岛川树',
  u_avatar: 'https://avatars2.githubusercontent.com/u/2021?s=460&v=4',
  u_email: 'songdaochuanshu@gmail.com',
};

socket.emit('join', userInfo);

socket.on('online', msg => {
  console.log('首次链接', msg);
});

socket.on('all', msg => {
  console.log('监听所有事件：', msg);
});


socket.on('like', msg => {
  console.log('收到点赞：', msg);
});

socket.emit('like', {
  u_id: 2,
  a_id: 68,
});
