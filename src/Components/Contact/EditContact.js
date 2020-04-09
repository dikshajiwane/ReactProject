import React, {Component} from 'react'
import {Consumer} from '../../Context'
import {v1 as uuid} from 'uuid'
import TextInputGroup from '../Layout/TextInputGroup'
import axios from 'axios'

class EditContact extends Component{
    state = {
        name:'',
        email:'',
        phone:'',
        errors: {}
    }

    async componentDidMount(){
      const {id} = this.props.match.params;
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
      this.setState({
        name:res.data.name,
        email:res.data.email,
        phone:res.data.phone,
      })

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

        const updateContact = {
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone
        }

        const id = this.props.match.params.id
        let res = await axios.put('https://jsonplaceholder.typicode.com/users/'+id, updateContact);
        dispatch({type:"UPDATE_CONTACT", payload:res.data});

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
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup name='name' type="text" label='Name' value={this.state.name}
                                    placeholder='Enter Name' onChange={this.onEleChange} error={this.state.errors.name}/>
                                    <TextInputGroup name='email' type="email" label='Email' value={this.state.email}
                                    placeholder='Enter Email' onChange={this.onEleChange} error={this.state.errors.email}/>
                                    <TextInputGroup name='phone' type="text" label='Phone' value={this.state.phone}
                                    placeholder='Enter Phone' onChange={this.onEleChange} error={this.state.errors.phone}/>
                                    <input type='submit' value='Edit Contact' className='btn btn-light btn-block'/>
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

export default EditContact