/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 03:44:21
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:45:47
 * @FilePath: \test\app\core\qiniu_service.js
 */
'use strict';
//七牛node SDK文档 https://developer.qiniu.com/kodo/1289/nodejs#5
const { Service } = require('egg');


class QiniuService extends Service {
    Time = (new Date()).getTime();
    fs = require("fs");
    qiniu = require("qiniu");
    bucket = "qiniuchat";                       //要上传的空间名
    Url = "qiniuchat.songdaochuanshu.com/";              //空间绑定的域名
    accessKey = "jeBV2vXsKeSJ7ChrFPhtIKnIjsVlp_Wgvh7mZV0W";   //Access Key
    secretKey = "-Da4mAJH_0fvyLG84GqPy3lAfqqJtYbFqrAIYJlu";    //Secret Key
    mac = new this.qiniu.auth.digest.Mac(this.accessKey, this.secretKey);
    config = new this.qiniu.conf.Config();
    zone = this.config.zone = this.qiniu.zone.Zone_z2; //华南
    formUploader = new this.qiniu.form_up.FormUploader(this.zone);
    putExtra = new this.qiniu.form_up.PutExtra();
    bucketManager = new this.qiniu.rs.BucketManager(this.mac, this.config);
}

module.exports = QiniuService;
