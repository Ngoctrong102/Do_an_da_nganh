import axios from '../configs/axios';

class Vegetable {
    getAll() {
        return axios.get('/vegatables')
    }
}

export default new Vegetable();