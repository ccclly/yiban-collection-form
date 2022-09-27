import axios from 'axios';

// 修改localhost
const instance = axios.create({
  baseURL: 'http://114.115.243.171:8081',
})

const sentMessage = (form) => {
  const {
    name,
    department1,
    department2,
    adjust,
    qq,
    phone,
    advantage,
  } = form;
  return instance.post(
    'sent',
    {
      'name': name,
      'department1': department1,
      'department2': department2,
      'adjust': adjust,
      'qq': qq,
      'phone': phone,
      'advantage': advantage
    },
  )
}

export { sentMessage };
