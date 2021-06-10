import Gardent from '../../services/Gardent.Service';

export const getGardentInfo = () => async dispatch => {
    var gardentInfo = await Gardent.getInfo();
    dispatch({
        type: "GET_GARDENT_INFO",
        payload: {
            gardentInfo
        }
    })
}

export const controlGardent = (controlObject) => {
        return { type: "CONTROL", payload: controlObject }
    }
    // export const controlMotor = (status) => {
    //     return { type: "CONTROL", payload: { motor: status } }
    // }


export const changeVege = id => async dispatch => {
    var respone = await Gardent.changeVege(id);
    dispatch({
        type: "CHANGE_VEGE",
        payload: {
            id
        }
    })
}