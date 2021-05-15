import qs from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';

var axios = require('axios');

import { API_URL } from '@env';


console.log(API_URL);
axios.defaults.baseURL = API_URL;
// axios.defaults.headers.common['token'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.default.paramsSerializer = param => qs.stringify(param)

axios.interceptors.request.use(async function(config) {
    // Do something before request is sent
    const token = await AsyncStorage.getItem('token');
    config.headers.common['token'] = token;
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
axios.default.interceptors.response.use((response) => {
    return response.data
}, error => {
    return Promise.reject(error);
})


export default axios.default;