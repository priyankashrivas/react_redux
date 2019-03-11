import React from 'react'
import { Link } from 'react-router-dom'

class Auth extends React.Component {
  state ={isSignedIn :true}
  renderAuthButton () {
    if(this.state.isSignedIn){
      return (
        <div className="ui list">
          <Link className='ui button primary' to={`/user/login`}> Login</Link>
          <Link className='ui button primary' to={`/user/register`}> Register</Link>
          <Link className='ui button left aligned button' to={`/`}>back</Link>
        </div>
      )
    }else {
      return (
        <div>
          <Link className='ui button left aligned button' to={`/logout`}>logout</Link>
        </div>
      );
    }
      
  }
  
  showPostDashboard(){
    if(this.state.isSigenedIn){
      return(
        <div>
          <div className='ui secondary pointing menu'>
           <div className ='ui list'>
           <div><Link to ='/post/list'>veiw all post</Link></div>
           <div><Link to ='/post/create'>create your own post</Link></div>
           </div> 
          </div> 
        </div>
      );
    }
    
  
  }
  render () {
    return <div>
             {this.renderAuthButton()}
             {this.showPostDashboard()}
           </div>
  }
}

export default Auth
