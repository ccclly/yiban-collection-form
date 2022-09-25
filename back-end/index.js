const express = require('express')
const path = require('path')
const app = express()

// 处理application/json类型的请求体
app.use(express.json());

// 部署静态页面
app.use(express.static(path.join(__dirname, 'dist')))

// 发送投递请求
app.post('/sent', (req, res) => {
  let obj = req.body;
  console.log(obj)
  res.json({aa: '123'});
})

// 获取所有的人信息
app.get('all', ((req, res) => {
  res.json({})
}));

app.listen(8081, () => {
  console.log('app listening on port 8081')
})
