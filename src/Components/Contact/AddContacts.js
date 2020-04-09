import React, {Component} from 'react'
import {Consumer} from '../../Context'
import {v1 as uuid} from 'uuid'
import TextInputGroup from '../Layout/TextInputGroup'
import axios from 'axios'

class AddContact extends Component{
    state = {
        name:'',
        email:'',
        phone:'',
        errors: {}
    }

    onEleChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = async (dispatch, e) => {
    e.preventDefault();
        if(this.state.name===""){
            this.setState({'errors': {name: "name is required"}})
            return;
        }
        if(this.state.email===""){
            this.setState({'errors': {email: "email is required"}})
            return;
        }
        if(this.state.phone===""){
            this.setState({'errors': {phone: "phone is required"}})
            return;
        }

        const newContact = {
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type:"ADD_CONTACT", payload:res.data});

        //clear the state
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
        this.props.history.push('/')
    }
    render(){

        return(
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return (
                        <div className='card'>
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup name='name' type="text" label='Name' value={this.state.name}
                                    placeholder='Enter Name' onChange={this.onEleChange} error={this.state.errors.name}/>
                                    <TextInputGroup name='email' type="email" label='Email' value={this.state.email}
                                    placeholder='Enter Email' onChange={this.onEleChange} error={this.state.errors.email}/>
                                    <TextInputGroup name='phone' type="text" label='Phone' value={this.state.phone}
                                    placeholder='Enter Phone' onChange={this.onEleChange} error={this.state.errors.phone}/>
                                    <input type='submit' value='Add Contact' className='btn btn-light btn-block'/>
                                </form>
                            </div>
                        </div>
                    )
                    }
                }
            </Consumer>
        )
    }
}

export default AddContact