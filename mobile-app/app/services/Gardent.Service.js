import axios from '../configs/axios';

class GardentService {
    getInfo() {
        return axios.get('/gardent/getInfo')
    }
    changeVege(id) {
        return axios.post('/gardent/changeVege', { id })
    }
    toggleLight(on) {
        return axios.post('/gardent/light', { on })
    }
    toggleMotor(on) {
        return axios.post('/gardent/motor', { on })
    }
}

export default new GardentService();