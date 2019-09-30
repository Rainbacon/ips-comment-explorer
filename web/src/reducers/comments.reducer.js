import { GET_COMMENTS, GET_COMMENTS_SUCCESS } from '../actions/comments.actions';

export function comments(state=initial_state, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return state;
        case GET_COMMENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}