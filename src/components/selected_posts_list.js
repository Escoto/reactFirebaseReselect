import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts';
import {fetchPostsOnDelete, deletePostList} from '../actions/index';
import {Link} from 'react-router';

class SelectedPostsList extends Component {

    onDeleteClick(){
        if(this.props.posts.length == 0) 
            return;
        
        this.props.deletePostList(this.props.posts)
            .then(()=>this.props.fetchPostsOnDelete());
    }

    render(){ return(
        <div>
            <h3>Selected Posts</h3>
            <ul className="list-group">
                {
                    this.props.posts.map( post => {
                        return (<li className="list-group-item" key={post.id}>{post.title}</li>);
                    })
                }
            </ul>

            <div className="pull-xs-right">
                <button 
                    className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Selected
                </button>
            </div>
        </div>
    )};
};

const mapStateToProps = state => {
    return {posts: SelectedPostsSelector(state.posts)}
};

export default connect(mapStateToProps, {fetchPostsOnDelete,deletePostList})(SelectedPostsList);