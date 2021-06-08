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
                return {
                    _id: action.payload._id,
                    username: action.payload.username,
                    avatar: action.payload.avatar,
                    codeMicrobit: action.payload.codeMicrobit
                }
            }
        case 'FETCH_INFOR':
            {
                return {
                    _id: action.payload.user._id,
                    username: action.payload.user.username,
                    avatar: action.payload.user.avatar,
                    codeMicrobit: action.payload.user.codeMicrobit
                }
            }
        default:
            return state
    }
}

export default userReducer;