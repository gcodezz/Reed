import BulletinFeed from '../../data/bulletin'
import { GET_BULLETINS } from '../actions/bulletin'

const initialState = {
    bulletins: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BULLETINS:
            return {
                ...state,
                bulletins: BulletinFeed
            }
        default:
            return state
    }
}