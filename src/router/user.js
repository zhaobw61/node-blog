const { login } = require('../controller/user.js')
const { SuccessModel, ErrorModel } = require('../model/resModel');

// 设置 cookie 的过期时间

const getCookieExpires = () =>{
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  return d.toGMTString();
}

const handleUserRouter = (req,res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  // 登录
  if (method === 'GET' && req.path === '/api/user/login') {
    const { username,password } = req.body;
    const result = login(username,password);
    return result.then(data => {
      if (data.username){
        req.session.username = data.username;
        req.session.realname = data.realname;
        return new SuccessModel();
      }
      return new ErrorModel('登录失败');
    })
  }
  // 登录验证

}
module.exports = handleUserRouter;