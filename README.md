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