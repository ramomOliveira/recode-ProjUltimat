import axios from 'axios';

const apiProd = axios.create({
  baseURL: 'https://appoluchi.herokuapp.com',
});

export default apiProd;