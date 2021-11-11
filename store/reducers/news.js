import NewsFeed from '../../data/newsData'
import { GET_NEWS } from '../actions/news'

const initialState = {
    current: [],
    archive: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                current: NewsFeed.filter(
                    news => news.category == 'current'
                ),
                archive: NewsFeed.filter(
                    news => news.category !== 'current'
                )
            }
        default: 
            return state
    }
}