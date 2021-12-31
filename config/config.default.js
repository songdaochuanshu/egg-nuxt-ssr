/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-12 23:55:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:53:30
 * @FilePath: \test\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589959108371_8503';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  config.jwt = {
    secret: '165165',
  };

  config.bodyParser = {// 解除大小
    jsonLimit: '100mb',
    formLimit: '100mb',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 日志文件
  config.logger = {
    dir: path.resolve(__dirname, '../logs/server'),
    appLogName: 'app.log',
    coreLogName: 'core.log',
    agentLogName: 'agent.log',
    errorLogName: 'error.log',
  };
  // 请求参数配置
  config.bodyParser = {
    enable: true,
    jsonLimit: '1000mb',
    formLimit: '1000mb',
    encoding: 'utf8',
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      text: ['text/xml', 'application/xml'],
    },
  };

  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
    },
  };

  // 静态化访问,如：`http://127.0.0.1:7001/static/images/logo.png`
  config.static = {
    prefix: '/static',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: false,
  };

  config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 表示允许的http请求方式
  };

  // 安全配置 （https://eggjs.org/zh-cn/core/security.html）
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ['http://127.0.0.1:7001/', 'https://2x819153o2.imdo.co/', 'http://127.0.0.1:3000/'], // 配置白名单  第一个服务端网址，第二个客户端网址,
  };

  // 统一错误信息配置（注：match和ignore不可以同时配置）
  config.errorHandler = {
    enable: true, // 中间件开启配置
    match: '', // 设置请求中间件的请求路由
    // ignore: '', // 设置不经过这个中间件的请求路由
  };

  config.multipart = {
    mode: 'stream',
    fileModeMatch: /(\/pageTemplate)$/, // /pageTemplate接口使用file模式，其他使用stream模式
    whitelist: [
      '.png',
      '.jpg',
      '.doc',
      '.dwg',
      '.docx',
      '.jpeg',
      '.webp',
    ],
    fileSize: '50mb',
    fieldSize: '1024kb',
  };
  return {
    ...config,
    ...userConfig,
  };
};
