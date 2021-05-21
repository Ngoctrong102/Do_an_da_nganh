import User from '../../services/User.service';
export const fetchUser = token => async dispatch => {
    try {
        var user = await User.fetchInfor();
        console.log(user)
        dispatch({
            type: "FETCH_INFOR",
            payload: {
                user
            }
        })
    } catch (err) {
        console.log(err)
    }
}