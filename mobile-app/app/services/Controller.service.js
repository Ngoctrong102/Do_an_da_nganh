import axios from '../configs/axios';

class ControllerService {
    toggleLight(on) {
        return axios.post('/controller/light', { on })
    }
}

export default new ControllerService();