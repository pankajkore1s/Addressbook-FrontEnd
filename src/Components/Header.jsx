import logo2 from '../Assets/logo2.png'
import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    return (
      <div>
          <div class="header-content">
            <img src={logo2} alt="" />
            <div>
                <span class="emp-text">ADDRESS</span><br />
                <span class="b">BOOK</span>
            </div>
            
            <h1 className='ab'>Address Book</h1>
        </div>
      </div>
    )
  }
}