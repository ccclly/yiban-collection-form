import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081',
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
