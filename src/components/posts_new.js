import _ from 'lodash';
import React, {  Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';
import {POSTS_NEW_FIELDS as FIELDS} from '../forms/posts_new_fields';

class PostsNew extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            this.context.router.push('/');
        });
    }

    renderField(fieldConf, fieldName){
        const field = this.props.fields[fieldName];
        return (
        <div key={fieldName} className={`form-group ${field.touched ? field.invalid ? 'has-danger' : 'has-success' : ''}`}>
            <label>{fieldConf.label}</label>
            <fieldConf.type type="text" placeholder={fieldConf.placeHolder} className="form-control" {...field}/>
            <div className="text-help">
                {field.touched && field.invalid ? fieldConf.errorMessage:''}
            </div>
        </div>
        );
    }

    render(){
        const {handleSubmit}=this.props;
        
        var form = 
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <h3>Create new Post.</h3>

            {_.map(FIELDS, this.renderField.bind(this))}

            <button type="submit" className="btn btn-primary">Create</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>

        </form>;

        return form;
    }
}

function validate(values){
    const errors = {};

    _.each(FIELDS,(type, field)=> {
        if(!values[field]) {
            errors[field] = FIELDS[field].errorMessage;
        }
    });

    return errors;
}

// connect params: mapStateToProps, mapDispatchToProps
// reduxForm params: formConfig, mapStateToProps, mapDispatchToProps
export default reduxForm ({
    form: 'PostsNewForm', //unique token
    fields: _.keys(FIELDS),
    validate
}, null, {createPost})(PostsNew);