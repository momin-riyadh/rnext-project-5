import {actions} from "../actions/index.js";


const initialState = {
    user: null,
    post: [],
    loading: false,
    error: null
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING: {
            return {
                ...state,
                loading: true
            }
        }

        case actions.profile.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts
            }
        }

        case actions.profile.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: {
            return state;
        }

    }
}
