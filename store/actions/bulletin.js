export const GET_BULLETINS = "GET_BULLETINS"

export const getBulletin = () => {
    return async dispatch => {
        dispatch ({
            type: GET_BULLETINS
        })
    }
}