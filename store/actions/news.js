export const GET_NEWS = "GET_NEWS"

export const getNews = () => {
    return async dispatch => {
        dispatch ({
            type: GET_NEWS
        })
    }
}