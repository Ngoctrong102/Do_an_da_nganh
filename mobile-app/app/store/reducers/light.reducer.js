var initState = {
    on: false,
}

const lightReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TURN_ON':
            {
                return {...action.payload }
            }
        default:
            return state
    }
}

export default lightReducer;