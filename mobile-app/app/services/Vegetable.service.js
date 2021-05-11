import axios from '../configs/axios';

class Vegetable {
    getAll() {
        return axios.get('/vegetables')
    }
    add(vegetable) {
        return axios.post('/vegetables', { vegetable })
    }
}

export default new Vegetable();