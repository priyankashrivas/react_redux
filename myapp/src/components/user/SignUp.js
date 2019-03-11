import React from 'react'
import _ from 'lodash'
import {signUp} from '../../actions'
import { connect } from 'react-redux';
import UserForm from './UserForm';
//import {validation} from '../../validation'

class SignUp extends React.Component {
  
  onSubmit = formValues => {
    let role = {
      roles:'admin'
    }
    formValues= _.assign(formValues,role)
    this.props.signUp(formValues);
  }

  render () {
    return (
      <div>
        <center> 
          <h2>Register Here</h2>
        </center>
       
        <UserForm onSubmit={this.onSubmit} />
      </div>      
    )
  }
}

export default connect(null,{signUp})(SignUp)

