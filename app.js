const http = require('http');
const querystring = require('querystring');

const server =http.createServer((req,res)=>{
  console.log('method: ',req.method);
  var url = req.url;
  console.log(url);
  let queryStr = querystring.parse(url.split('?')[1]);
  console.log('queryStr: ',queryStr);
  console.log('req.query: ',req.query);
  res.end('hello world!');
})
server.listen(8000);
console.log('server ok!');