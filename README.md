### 开发接口

#### nodejs 处理http请求

- http请求过程:

1.浏览器：DNS解析、建立TCP连接（三次握手）、发送http请求

（1）DNS解析：本地缓存和浏览器缓存
（2）建立TCP连接（三次握手）：

> 浏览器->客户端：客户端可以使用？
  客户端->浏览器：客户端可以使用。
 
2.server接收到http请求，处理，返回

3.客户端接收到数据，处理数据，渲染数据，执行JS

- get post

> get 请求数据
> post 客户端要像服务端传递数据。浏览器不能直接模拟请求需要手写JS或者postman

### mysql 常用语句

- 注释

` -- shwo tables;`

- 增加

`insert into users(username,password,realname)values('zhangsan','123','张三');`

- 查询

`select * from users` 尽量不要使用*，可能会降低性能

`select id,username from users`

`select * from users where username ='zhangsan' and|or password ='123'`

`select * from users where username like 'zhang'`

- 排序

`select * from users where username ='zhangsan' order by id`

- 改值

`update users set realname='李四2' where username= 'lisi'`

- 删除

`delete from users where username='lisi'`

- 解除安全模式

`SET SQL_SAFE_UPDATES = 0;`

### cookie

- 定义： 

1.存储在浏览器的一段字符串（最大5KB）

2.跨域不共享

3.格式：k1=v1;k2=v2;k3=v3;因此可以存储结构化数据

4.每次发送http请求，会将请求域cookie一起发送给server

5.server可以修改cookie并返回给浏览器

6.浏览器可以通过js修改cookie

- JS 操作 cookie

1.JS修改cookie:document.cookie = value // 累加的过程，不是直接赋值

2.查看cookie：在控制台的application、在network

3.http-only:服务器可以限制客户端的修改

4.过期时间：设置expires

5.res.setHeader('Set-Cookie',`username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)

### session

- 定义：cookie中存储userid，server端存储用户信息。(因为cookie会暴露用户的信息)

1.
