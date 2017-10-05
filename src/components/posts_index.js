import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts, selectPosts} from '../actions/index';
import {Link} from 'react-router';
import SelectedPostsList from './selected_posts_list';

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    console.log(this.props.posts);
    if(this.props.posts.length == 0) 
    return;

    var list = this.props.posts.map((post)=>{
      return (
        <li className="list-group-item" key={post.id}>
          <input type="checkbox" 
          value={post.id}  
          onChange={this.props.selectPosts.bind(this,post)}
          defaultChecked={_.includes(this.props.selectedPosts,post.id)}/>
          <Link to={`posts/${post.id}`}>
            <strong>{post.title}</strong>
            <span className="pull-xs-right">{post.categories}</span>
          </Link>
        </li>
      );
    });
    return list;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
       
        <h3>All Posts</h3>
        <ul className = "list-group">
          {this.renderPosts()}
        </ul>

        <hr />

        <SelectedPostsList />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts:state.posts.all,selectedPosts:state.posts.selectedPostsIDs};
}

export default connect(mapStateToProps, { fetchPosts, selectPosts })(PostsIndex);