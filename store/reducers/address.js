import { 
    UPDATE_USER_ADDRESS, 
    UPDATE_DESTINATION_ADDRESS, 
    UPDATE_DRIVE_TIME, 
    UPDATE_WALK_TIME,
    UPDATE_CYCLE_TIME 
} from "../actions/address"

const initialState = {
    userAddress: "",
    userCoords: {},
    destinationAddress: "",
    destinationCoords: {},
    walkingData: {},
    drivingData: {},
    cyclingData: {}
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case UPDATE_USER_ADDRESS:
            return {
                ...state,
                userAddress: action.originAddress,
                userCoords: action.originCoordinates
            }
        case UPDATE_DESTINATION_ADDRESS:
            return {
                ...state,
                destinationAddress: action.descriptionAddress,
                destinationCoords: action.destinationCoords
            }
        case UPDATE_WALK_TIME: {
            return {
                ...state,
                walkingData: {
                    distance: action.distance,
                    duration: action.duration
                }
            }
        }
        case UPDATE_DRIVE_TIME: {
            return {
                ...state,
                drivingData: {
                    distance: action.distance,
                    duration: action.duration
                }
            }
        }
        case UPDATE_CYCLE_TIME: {
            return {
                ...state,
                cyclingData: {
                    distance: action.distance,
                    duration: action.duration
                }
            }
        }
        default: 
            return state
    }
}