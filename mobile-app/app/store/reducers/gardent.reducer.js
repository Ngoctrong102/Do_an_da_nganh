var initState = {
    hasGardent: false,
    light: false,
    motor: false,
    temp: 0,
    humidity: 0,
    current: ''
}

const gardentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_GARDENT_INFO':
            {
                return {...action.payload.gardentInfo, hasGardent: true }
            }
        case "CHANGE_VEGE":
            {
                return {...state, current: action.payload.id }
            }
        case 'CONTROL':
            return {
                ...state,
                ...action.payload
            }
        case "LOGOUT":
            {
                return initState;
            }
        default:
            return state
    }
}

export default gardentReducer;