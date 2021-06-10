import Vegetable from "../../services/Vegetable.service";

export const getVeges = () => async dispatch => {
    var veges = await Vegetable.getAll();
    dispatch({
        type: 'GET_ALL_VEGES',
        payload: {
            veges
        }
    })
}


export const deleteVege = (vegeID) => {
    return {
        type: "DELETE_VEGE",
        payload: {
            _id: vegeID
        }
    }
}

export function addVege(vege) {
    return {
        type: "ADD_VEGE",
        payload: {
            vege
        }
    }
}

export function updateVege(_id, vege) {
    return {
        type: "UPDATE_VEGE",
        payload: {
            _id,
            vege
        }
    }
}