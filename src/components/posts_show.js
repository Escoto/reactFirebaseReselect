import React, {  Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
    
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/');
        });
    }

    render(){

        const {post} = this.props;

        if(!post){
            return <div>Loading...</div>
        }

        return (
        <div>
            <div className="text-xs-left">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
            <div className="pull-xs-right">
                <button 
                    className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete
                </button>
            </div>
        </div>);
    }
}

function mapStateToProps(state){
    return {post:state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);