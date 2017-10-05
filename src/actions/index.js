import database from '../connections/firebase';
import _ from 'lodash';
import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const SELECT_POSTS = 'SELECT_POSTS';
export const DELETE_POST_LIST = 'DELETE_POST_LIST';
export const FETCH_POSTS_ON_DELETE = 'FETCH_POSTS_ON_DELETE';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = '?key=rafakey1234qwer';

const KEY_URL = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
    var request = database
        .ref('posts')
        .once('value')
        .then(snap => snap.val());

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPostsOnDelete(){
    const request = axios.get(KEY_URL);
    
    return {
        type: FETCH_POSTS_ON_DELETE,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(KEY_URL, props);
    
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: FETCH_POST,
        payload: request
    };

}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: DELETE_POST,
        payload: request
    };

}

export function deletePostList(posts) {
    const requests = axios.all(_.map(posts, post =>
        axios.delete(`${ROOT_URL}/posts/${post.id}${API_KEY}`)
    ));

    return {
        type: DELETE_POST_LIST,
        payload: requests
    };
}

export function selectPosts(post = null, event = null) {
    return {
        type: SELECT_POSTS,
        payload: (!post)?post:post.id
    };
}