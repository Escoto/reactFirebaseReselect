import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = '?key=rafakey1234qwer';

const KEY_URL = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts (){
    
    const request = axios.get(KEY_URL);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };

};

export function createPost(props) {
    
    const request = axios.post(KEY_URL, props);
    
    return {
        type: CREATE_POSTS,
        payload: request
    };

};


export function fetchPost(id) {
    
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: FETCH_POST,
        payload: request
    };

};


export function deletePost(id) {
    
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: DELETE_POST,
        payload: request
    };

};