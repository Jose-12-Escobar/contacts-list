import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/contact.scss';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact, offOn, remove}) => {

    // Function that returns if is connected or not 
    function connectedIcon() {
        if (contact.connected) {
            return(<i onClick={() => offOn(contact)} className="bi bi-circle-fill contact-action" style={{color: 'green'}}></i>);
        }else{
            return(<i onClick={() => offOn(contact)} className="bi bi-circle-fill contact-action" style={{color: 'red'}}></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th scope='row'>
                <span className='ms-2'>{contact.nameContact}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.surnamesContact}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td classNama='align-middle'>
                {connectedIcon()}
                <i onClick={() => remove(contact)} className='bi-trash contact-action ps-3' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );   
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    offOn: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
