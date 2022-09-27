const mysql = require('mysql2')

const mysqlClient = mysql.createPool({
  database: 'yiban',
  user: 'root',
  password: '123456'
})

mysqlClient.getConnection((err, conn) => {
  conn.connect(err => {
    if(err){
      console.log('mysql连接失败', err)
    }else{
      console.log('mysql数据库连接成功')
    }
  })
})

module.exports = { mysqlClient }
