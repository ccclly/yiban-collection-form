const mysqlClient = require('mysql')
let connection = mysqlClient.createConnection({
  host:'localhost',
  user:'root',
  password:'admin123',
  database:'vue_store' //数据库名称
})
module.exports = connection
