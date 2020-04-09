import React, {Component} from 'react';
import Contact from './Contact.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Consumer} from '../../Context.js'

class Contacts extends Component {
    render(){
        return(
            <Consumer>
             {value => {
                const {contacts} = value;
                return (
                     <React.Fragment>
                         <h1 className='dispaly-4 mb-2'><span className="text-danger">Contact List</span></h1>
                         {contacts.map(contact =>
                         (<Contact key={contact.id} contact={contact}/>))}
                     </React.Fragment>
                )}
             }
            </Consumer>
        )
    }
}
export default Contacts