import axios from '../configs/axios';

class Vegetable {
    getAll() {
        return axios.get('/vegetables')
    }
    add(vegetable) {
        return axios.post('/vegetables', { vegetable })
    }
    delete(vegeID) {
        return axios.delete(`/vegetables/${vegeID}`);
    }
    update(_id, vege) {
        return axios.put(`/vegetables/${_id}`, { vege })
    }
}

export default new Vegetable();