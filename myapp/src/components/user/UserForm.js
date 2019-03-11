import React from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash'

class UserForm extends React.Component {
  
  renderError({error,touched}) {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,idLable,Type, label,meta ,placeholder}) => {
   const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input {...input} id={idLable} type={Type} holder={placeholder} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    formValues= _.omit(formValues,'cpassword')
    this.props.onSubmit(formValues);
  }

  render () {
    return (
      <div>
       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field 
          Type='text'
          name='first_name'
          component={this.renderField}
          idLable='fname'
          label='Enter First Name'
        />
        <Field 
          Type='text'
          name='last_name'
          component={this.renderField}
          idLable='lname'
          label='Enter Last Name'
        />
        <Field 
          Type='email'
          name='email'
          component={this.renderField}
          idLable='email'
          label='Enter Email ID'
        />
        <Field 
          Type='text'
          name='username'
          component={this.renderField}
          idLable='username'
          label='Enter User Name'
        />
        <Field 
          Type='password' 
          name='password' 
          component={this.renderField} 
          idLable='psw' 
          label='Enter Password'
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and
            lowercase letter, and at least 8 or more characters"
        />
        <Field 
          Type='password' 
          name='cpassword' 
          component={this.renderField} 
          idLable='cpsw' 
          label='Confirm Password'
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

  if(!formValues.first_name){
    errors.first_name = "must enter first name!!!";
  }

  if(!formValues.last_name){
    errors.last_name = "must enter last name!!!";
  }

  if(!formValues.email){
    errors.email = "must enter  email!!!"; 
  }

  if(!formValues.password){
    errors.password = "must enter password!!!";
  }

  if(!formValues.cpassword){
    errors.cpassword = "must enter confirm Password!!!";
  }

  if(formValues.password !== formValues.cpassword){
    errors.cpassword = "mismatch password!!!";
  }
  return errors;
};

export default reduxForm({
    form: 'registerForm',
    validate
  })(UserForm);

