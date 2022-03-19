import axios from 'axios';
import Cookies from 'js-cookie';

const apiProd = axios.create({
  baseURL: 'https://appoluchi.herokuapp.com',
});

apiProd.interceptors.request.use(function (request) {
  const userId = Cookies.get('userId')

  if (userId) {
    request.headers.userId = userId
  }

  return request
})

export default apiProd;