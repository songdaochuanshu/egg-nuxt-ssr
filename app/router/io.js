/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 03:59:49
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 04:01:29
 * @FilePath: \test\app\router\io.js
 */

'use strict';

module.exports = app => {
    const { io } = app;
    io.of('/').route('like', io.controller.notice.like); // 点赞通知
    io.of('/').route('comment', io.controller.notice.comment); // 评论通知
    io.of('/').route('focus', io.controller.notice.focus); // 关注通知
    io.of('/').route('message', io.controller.notice.message); // 留言通知
}

