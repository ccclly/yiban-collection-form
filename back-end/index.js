const express = require('express')
const path = require('path')
const { mysqlClient } = require('./mysqlClient');
const app = express()

// 处理application/json类型的请求体
app.use(express.json());

// 部署静态页面
app.use(express.static(path.join(__dirname, 'dist')))

// 发送投递请求
app.post('/sent', (req, res) => {
  let obj = req.body;
  const sql = `INSERT INTO yiban (name, department1, department2, adjust, phone, qq, advantage) VALUES (?, ?, ?, ?, ?, ?, ?);`
  console.log(obj)
  mysqlClient.execute(sql, [
    obj.name,
    obj.department1,
    obj.department2,
    obj.adjust,
    obj.qq,
    obj.phone,
    obj.advantage
  ],function(err, results, fields) {
    console.log(results); // 结果集
    console.log(fields); // 额外的元数据（如果有的话）
    console.log(err)
    res.json({aa: '123'});
  })
})

// 获取所有的人信息
app.get('/all', ((req, res) => {
  const sql = `select * from yiban;`
  mysqlClient.execute(sql, function(err, result, fileds) {
    res.json(result)
  })
}));

app.listen(8081, () => {
  console.log('app listening on port 8081')
})
