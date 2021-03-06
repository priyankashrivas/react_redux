import React from 'react'
import {postCreate} from '../../actions'
import { connect } from 'react-redux';
import PostForm from './PostForm'

class PostCreate extends React.Component {

  onSubmit = formValues =>{
    this.props.postCreate(formValues);
};

render() {
    return (
        <div>
          <center> <h2>Create post</h2></center>
           <PostForm onSubmit ={this.onSubmit}/>
        </div>
    );
}  
}

export default connect(null,{postCreate})(PostCreate);
