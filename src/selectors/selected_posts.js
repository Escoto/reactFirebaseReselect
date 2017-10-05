import _ from 'lodash';
import {createSelector} from 'reselect';

const allSelector = state => state.all;
const selectedPostsSelector = state => state.selectedPostsIDs

const getPosts = (all, selectedPostsIDs)=>{
    
    const selectedPosts = _.filter(
        all, 
        post => _.contains(selectedPostsIDs, post.id)
    );

    return selectedPosts;
};

export default createSelector(
    allSelector,
    selectedPostsSelector,
    getPosts //las argument is a function with select logic
);