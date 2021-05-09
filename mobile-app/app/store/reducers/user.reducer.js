var initState = {
    _id: null,
    username: null,
    password: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            {
                return {...action.payload }
            }
        default:
            return state
    }
}

export default userReducer;