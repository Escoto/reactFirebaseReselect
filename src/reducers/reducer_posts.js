import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, SELECT_POSTS, DELETE_POST_LIST, FETCH_POSTS_ON_DELETE} from '../actions/index';

const INITIAL_STATE = { all:[], post: null, selectedPostsIDs:[] };

export default function( state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POST:
            return {...state, post: action.payload.data };
        case FETCH_POSTS:
            return {...state, all: action.payload };
        case FETCH_POSTS_ON_DELETE:
            return {...INITIAL_STATE, all: action.payload.data };
        case DELETE_POST_LIST:
            return INITIAL_STATE;
        case SELECT_POSTS:
            return {...state, selectedPostsIDs :
                _.contains(state.selectedPostsIDs, action.payload) ? 
                _.difference(state.selectedPostsIDs, [action.payload]) : 
                [action.payload, ...state.selectedPostsIDs] };
        default:
            return state;
    }

}