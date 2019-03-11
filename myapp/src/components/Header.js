import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Auth'

class Header extends Component {
    renderDashBoard(){
        return (
            <div className='ui secondary pointing menu'>
            <Link to='/' className='item'> React Demo App</Link>
                <div className='right menu'>
                <Auth/>
                </div>
            </div>    
        )   
    }

  render () {
    return (
        <div>
            {this.renderDashBoard()}
        </div>
    )
  }
}

export default Header
