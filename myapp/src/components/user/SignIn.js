import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {signIn} from '../../actions'
import { connect } from 'react-redux'


class SignIn extends React.Component {

  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,Type, label,meta,placeholder}) => {
  const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
  return (
    <div className={className}>
      <label>
        {label}
      </label>
      <input {...input}  type={Type} holder ={placeholder} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
  )
}


onSubmit = formValues => {
  this.props.signIn(formValues);
}


  render () {
    return (
      <div>
        <div className='ui md row'>
          <center><h2>Login Here</h2></center>
        </div>
        
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
         <Field 
          Type='text'
          name='username'
          component={this.renderField}
          label='Username'
          placeholder ='Enter username'
        />
        <Field 
          Type='password' 
          name='password' 
          component={this.renderField}  
          label='Password'
          placeholder ='Enter Password'
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and
            lowercase letter, and at least 8 or more characters"
        />
        <button className="ui button primary" >Submit</button>
      </form>
      </div>      
    )
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.username){
    errors.username = "must enter username!!!";
    
  }
  if(!formValues.password){
    errors.password = "must enter password!!!";
  }

  return errors;
};

 const form = reduxForm({
    form: 'loginForm',
    validate
  })(SignIn);

  export default connect(null,{signIn})(form);

