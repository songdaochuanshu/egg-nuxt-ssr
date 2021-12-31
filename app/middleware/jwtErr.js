/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2021-07-01 17:22:37
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-02 11:48:14
 * @FilePath: \eggDemo\app\middleware\jwtErr.js
 */
module.exports = () => {
  return async function(ctx, next) {
    if (ctx.get('Authorization')) {
      console.log(ctx.get('Authorization'));
      const token = ctx.get('Authorization');
      try {
        ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      } catch (error) {
        console.log(error);
        if (error.name == 'TokenExpiredError') {
          /** 401 http错误 未经授权,访问由于凭证无效而被拒绝 */
          ctx.status = 401;
          ctx.body = {
            msg: 'token过期',
          };
          return;
        }
        ctx.status = 401;
        ctx.body = {
          msg: 'token失效',
        };
        return;

      }
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        msg: '没有token',
      };
      return;
    }
  };
};
