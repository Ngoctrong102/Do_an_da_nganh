import axios from '../configs/axios';

class UserService {
    login(username, password) {
        return axios.post('/user/login', { username, password })
            // .then(res => res.data)
            .catch(err => console.log(err))
    }
    signUp(username, password, repass) {
        return axios.post('/user/signup', { username, password, repass })
            // .then(res => res.data)
            .catch(err => console.log(err))
    }
}

export default new UserService();