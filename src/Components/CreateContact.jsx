import React, { Component } from 'react'
import AddressService from '../Service/AddressService';

export default class CreateContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            fullName:"",
            address:"",
            city:"",
            state:"",
            zipcode:"",
            phoneNum:""   
        }
        this.changeFullNameHandler=this.changeFullNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changeZipcodeHandler=this.changeZipcodeHandler.bind(this);
        this.changePhoneNumHandler=this.changePhoneNumHandler.bind(this);
        this.saveContact=this.saveContact.bind(this);
    }
    
    changeFullNameHandler=(event)=>{
        this.setState({fullName: event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({city: event.target.value});
    }
    changeStateHandler=(event)=>{
        this.setState({state: event.target.value});
    }
    changeZipcodeHandler=(event)=>{
        this.setState({zipcode: event.target.value});
    }
    changePhoneNumHandler=(event)=>{
        this.setState({phoneNum: event.target.value});
    }

    saveContact=(e)=>{
        e.preventDefault();
        let address={fullName:this.state.fullName,address:this.state.address,city:this.state.city,state:this.state.state,zipcode:this.state.zipcode,phoneNum:this.state.phoneNum};
        console.log('address =>'+JSON.stringify(address));

        AddressService.createContact(address).then(res=>{
            this.props.history.push('/')
        });
    }

    reset(){
        this.props.history.push("/")
    }



        render(){
            return (
              <div className='add'>
                  <h1>Person Address Form</h1>
                  <div className='form'>
                    <form>
                        
                          <lable>FullName</lable><br></br>
                          <input type='text' placeholder='Enter Full Name'value={this.state.fullName} onChange={this.changeFullNameHandler}/> 
                          <lable>Address</lable><br></br>
                          <input type='text' style={{height:150,width:1068}} placeholder='Enter Address'value={this.state.address} onChange={this.changeAddressHandler}/>
                          
                         
                          <lable>PhoneNumber</lable><br></br>
                          <input type='number' placeholder='Enter PhoneNumber'value={this.state.phoneNum} onChange={this.changePhoneNumHandler}/>
                          
                          
                          <label>City</label><br></br>
                          <select value={this.state.value} onChange={this.changeCityHandler}>
                            <option selected disabled hidden value="Select City">Select City</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Surat">Surat</option>
                        </select>
                        
                        <label>State</label>
                        <select value={this.state.value} onChange={this.changeStateHandler}>
                            <option selected disabled hidden value="Select State">Select State</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Gujrat">Gujrat
                            </option>
                        </select>
                        <label>ZipCode</label>
                        <input type='zipcode' placeholder='ZipCode'value={this.state.zipcode} onChange={this.changeZipcodeHandler}/><br></br>
                            <div class="buttons-contact">
                            <button className='submit'  onClick={this.saveContact}>Add</button>
                            <button className='Reset' onClick={this.reset.bind(this)}>Reset</button>
                            </div>
                    </form>
                  </div>
              </div>
            )
          }
}
