/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-12 23:55:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:47:36
 * @FilePath: \test\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  redis: {
    enable: false,
    package: 'egg-redis',
  },
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  validate: {
    enable: false,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  static: {
    enable: true,
    package: 'egg-static',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};
