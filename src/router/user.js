const handleUserRouter = (req,res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  // 获取博客列表
  if (method === 'POST' && req.path === '/api/blog/list') {
    return {
      msg: '这是登录的接口'
    }
  }
}
module.exports = handleUserRouter;