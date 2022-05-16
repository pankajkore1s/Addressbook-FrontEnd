import React, { Component } from 'react'
import AddressService from '../Service/AddressService';

export default class ListContent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        addressdb: []
         
      }
      this.createContact=this.createContact.bind(this);
    }

    createContact(){
      this.props.history.push("/create-contact")
    }

    componentDidMount(){
      AddressService.getContacts().then((res)=>{
        this.setState({addressdb: res.data})
    });
    }
  render() {
    return (
      <div>
          <div className='center-body'>
          {/* <h2 className='pd'>Person Details 
          <button onClick={this.createContact} className='addbtn' >+Add Person</button></h2> */}
           <h2 className='pd'>Person Details <button onClick={this.createContact} className='addbtn'>+Add Person</button></h2>
          <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zipcode</th>
                            <th>Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.addressdb.map(address =>
                              <tr key ={address.id}>
                                  <td>{address.fullName} </td>
                                  <td>{address.address}</td>
                                  <td>{address.city}</td>
                                  <td>{address.state}</td>
                                  <td>{address.zipcode}</td>
                                  <td>{address.phoneNum}</td>
                                  </tr>
                            )
                            }
                        </tbody>
                      
                    </table>
                </div>
         </div>
      </div>
    )
  }
}