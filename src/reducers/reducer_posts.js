import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, SELECT_POSTS} from '../actions/index';

const INITIAL_STATE = { all: [], post: null, selectedPostsIDs:[] };

export default function( state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POST:
            return {...state, post: action.payload.data };
        case FETCH_POSTS:
            return {...state, all: action.payload.data };
        case SELECT_POSTS:
            const post = action.payload;
            var selected = []
            if(_.contains(state.selectedPostsIDs, post.id)){
                selected = _.difference(state.selectedPostsIDs, [post.id]);
            }
            else{
                selected = [post.id, ...state.selectedPostsIDs];
            }
            console.log({...state, selectedPostsIDs: selected });
            return {...state, selectedPostsIDs: selected };
        default:
            return state;
    }

}