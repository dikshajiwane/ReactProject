import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../../Context.js'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Contact extends Component{
    state = {
        showInfo: true
    };
    onShowClick = e => {
            this.setState({showInfo: !this.state.showInfo});
        };
    onDeleteClick = async (id, dispatch) => {
      try{
        await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
        dispatch({type: 'DELETE_CONTACT', payload: id});
      }catch(e){
        dispatch({type: 'DELETE_CONTACT', payload: id});
      }

    };

    render(){
        const {id, name, email, phone} = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                        <h4>{name}
                         <i className="fas fa-sort-down" onClick={this.onShowClick}/>
                         <i className="fas fa-times" style={{cursor: "pointer", float:"right", color:"red"}}
                         onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
                         <Link to={`contact/edit/${id}`}> <i className="fas fa-pencil-alt"/></Link>
                         </h4>
                            {this.state.showInfo ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>:null }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contact