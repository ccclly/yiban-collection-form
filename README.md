# yiban-collection-form
这是一个表单收集网站
- 前端：vue3+element ui
- 后端：express

需要环境：nodejs(16,10)，linux(centos 8.2)，mysql

### 1前端打包
进入`font-end`文件，运行`npm install`安装依赖，运行`npm run build`打包前端代码生成dist文件，将dist文件复制到`back-end`内，启动服务器(详细3后端部署)

### 2mysql数据库
安装mysql参考：http://t.zoukankan.com/wanjinliu-p-15234443.html

创建数据库&创建表
```sql
create database yiban;
use yiban;
create table yiban (
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    department1 varchar(255) not null,
    department2 varchar(255) not null,
    adjust varchar(255) not null,
    phone varchar(255) not null,
    qq varchar(255) not null,
    advantage varchar(512),
    PRIMARY KEY (id)
);
```

### 3后端部署（使用forever守护进程）
```shell
# forever不谦容高版本npm，使用n切换node版本为10.0.0
npm i -g n  #安装node版本切换工具
n 10.0.0   #安装10.0.0的node版本
npm i -g forever  #安装forever
forever start index.js  #使用forever启动进程
forever stop index.js  #使用forever停止进程
```
### 4用户访问
在云服务器控制台开放8081端口

输入服务器的ip地址+:8081(如:http://xx.xxx.xx.xx:8081)访问投递界面

输入服务器的ip地址+:8081/all(如:http://xx.xxx.xx.xx:8081/all) 查询数据库结果
