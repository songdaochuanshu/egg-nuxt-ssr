/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-12 23:55:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 04:01:42
 * @FilePath: \test\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/test')(app);
  require('./router/io')(app);
};

