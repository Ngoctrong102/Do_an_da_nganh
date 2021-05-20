var initState = {
    veges: [],
    current: null,
}

const vegetablesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_VEGES':
            {
                return {...state, veges: action.payload.veges }
            }
        case 'DELETE_VEGE':
            {
                return {
                    ...state,
                    veges: state.veges.filter(v => v != action.payload._id)
                }
            }
        case "ADD_VEGE":
            {

                return {
                    ...state,
                    veges: [...state.veges, action.payload.vege]
                }

            }
        case "LOGIN":
            {
                return {
                    veges: action.payload.veges,
                    current: action.payload.current
                }
            }
        case "UPDATE_VEGE":
            {
                var newVeges = [...state.veges].map(v => {
                    if (v._id == action.payload._id) {
                        return {
                            _id: action.payload._id,
                            ...action.payload.vege
                        }
                    } else return {...v };
                })
                return {
                    ...state,
                    veges: newVeges
                }
            }
        default:
            return state
    }
}

export default vegetablesReducer;