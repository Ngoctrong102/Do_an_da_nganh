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
        case 'FETCH_INFOR':
            {
                return {...action.payload.user }
            }
        default:
            return state
    }
}

export default userReducer;