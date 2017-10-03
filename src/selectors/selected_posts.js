import _ from 'lodash';
import {createSelector} from 'reselect';

const postsSelector = state => state.all;
const selectedPostsSelector = state => state.selectedPostsIDs

const getPosts = (posts, selectedPostsIDs)=>{
    const selectedPosts = _.filter(
        posts, 
        post => _.contains(selectedPostsIDs, post.id)
    );

    return selectedPosts;
};

export default createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts //las argument is a function with select logic
);