import React from 'react';
import {Field, reduxForm} from 'redux-form';


class PostForm extends React.Component {
    
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className ="header" >{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ({input,label,meta}) => {
        const className=`Field ${meta.error && meta.touched ? 'error' : ' '}`;
        return (
            <div className ={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );  
    }
    
    onSubmit = formValues =>{
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name ="title" component ={this.renderInput} label="Enter title" />
                <Field name ="description" component={this.renderInput}  label="Enter description"/>
                <Field name ="status" component={this.renderInput}  label="Published by"/>
                <div>
                <button className = "ui button primary">submit</button>
                </div>
                
            </form>
        );
    }  
}

const validate =(formValues) => {
    const error ={};
    if(!formValues.title){
        error.title= "you must enter the title";
    }
    if(!formValues.title){
        error.description="you must enter the description";
    }
    return error;
}

export default reduxForm({
    form: 'streamForm',
    validate:validate
})(PostForm);

