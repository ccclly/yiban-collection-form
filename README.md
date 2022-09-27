# yiban-collection-form
这是一个表单收集网站
- 前端：vue3+element ui
- 后端：express

需要环境：nodejs，linux，mysql

mysql数据库表
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

部署方式（使用forever守护进程）
```shell
# forever不谦容高版本npm，使用n切换node版本为10.0.0
npm i -g n  #安装node版本切换工具
n 10.0.0   #安装10.0.0的node版本
npm i -g forever  #安装forever
forever start index.js  #使用forever启动进程
forever stop index.js  #使用forever停止进程
```
