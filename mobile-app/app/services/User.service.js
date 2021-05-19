import axios from '../configs/axios';

class UserService {
    login(username, password) {
        return axios.post('/user/login', { username, password })
            .catch(err => console.log(err))
    }
    signUp(username, password, repass) {
        return axios.post('/user/signup', { username, password, repass })
            .catch(err => console.log(err))
    }
    addQR(QR) {
        return axios.post('/user/addQR', { QR }).catch(err => console.log(err));
    }
}

export default new UserService();