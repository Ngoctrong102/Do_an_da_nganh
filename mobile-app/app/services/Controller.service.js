import axios from '../configs/axios';

class ControllerService {
    toggleLight(on) {
        return axios.post('/controller/light', { on })
    }
    toggleMotor(on) {
        return axios.post('/controller/motor', { on })
    }
}

export default new ControllerService();