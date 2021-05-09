import qs from 'query-string';

var axios = require('axios');

import { API_URL } from '@env';
// console.log('api', API_URL)

// var _axios = axios.create({
//   baseURL:API_URL,
//     paramsSerializer: param => qs.stringify(param)
// })
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['token'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.default.paramsSerializer = param => qs.stringify(param)
axios.default.interceptors.response.use((response) => {
    return response.data
}, error => {
    return Promise.reject(error);
})


export default axios.default;