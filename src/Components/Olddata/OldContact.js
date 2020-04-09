import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './contact.css';

class Contact extends Component{
    //checking prop types
    static propTypes = {
        name: PropTypes.string.isRequired
    }
    render(){
        return (
        //<h4 style={{color:'red'}}>Hi {this.props.name}</h4>
        //<h4 style={contactStyle}>Hi {this.props.name}</h4>
        <h4>Hi {this.props.name}</h4>
        )
    }
}
Contact.defaultProps = {
    name: "Teju Bhure"
}
/*Contact.propTypes = {
    name: PropTypes.string.isRequired
}*/

const contactStyle = {color: 'green'}
export default Contact





//for lucky's content

render(){
        return(
        <div className='container-fluid'>
           <div className='row'>
            <div className='col-md-4'>
                    The History of Window Treatments Can Be Traced Back to the Ancient Egyptians.
The use of blinds in Cape Town has become quite popular in both homes and offices, but have you ever wondered about their history?

The Origins of Blinds
History of Window TreatmentsThe ancient Egyptians were the first known to utilise blinds in their primitive format. Reeds were bundled together or cotton cloths were used to cover the windows of their shelters.

This was primarily to cool the interior of the shelters. It seems that they even wet the cloths for a more of a cooling affect. Remarkably, we see the same basic use for Blinds today, shading, privacy, energy efficiency and decor.

Ancient Eastern cultures the History of Window Treatments reveals that they also used bamboo sticks bound together to cover window openings, which is the basic form of today’s Bamboo Blinds.

Over the ages different cultures used combinations of cloths, reeds and slats to cover their windows. Although these window coverings provided shading it is only in recent years that they have evolved to allow for flexibility in movement.
            </div>
            <div className='col-md-8'>

                 <Carousel>
                <div>
                    <img src={Image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image2}/>

                    <p>material: cotton
                    prize: 200/Square</p>
                </div>
                <div>
                    <img src={Image3} />
                    <p>material: cotton
                    prize: 200/Square</p>
                </div>
            </Carousel>

            </div>
            </div>
        </div>
         )
    }