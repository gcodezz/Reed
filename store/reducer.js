import { UPDATE_USER_ADDRESS } from "./action"

const initialState = {
    userAddress: ""
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case UPDATE_USER_ADDRESS: 
            return {
                ...state,
                userAddress: action.userLocation
            }
        default: 
            return state
    }
}