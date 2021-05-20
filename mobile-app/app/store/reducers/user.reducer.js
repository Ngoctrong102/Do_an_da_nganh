var initState = {
    _id: '',
    username: '',
    avatar: '',
    codeMicrobit: '',

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