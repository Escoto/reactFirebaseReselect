import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts, selectPosts} from '../actions/index';
import {Link} from 'react-router';
import SelectedPostsList from '../components/selected_posts_list';

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post)=>{
      return (
        <li className="list-group-item" key={post.id}>
          <input type="checkbox" value={post.id}  onChange={()=>this.props.selectPosts(post)}/>
          <Link to={`posts/${post.id}`}>
            <strong>{post.title}</strong>
            <span className="pull-xs-right">{post.categories}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Selected Posts</h3>
        <selected_posts_list />
        <hr />
        <h3>All Posts</h3>
        <ul className = "list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts:state.posts.all};
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts, selectPosts })(PostsIndex);