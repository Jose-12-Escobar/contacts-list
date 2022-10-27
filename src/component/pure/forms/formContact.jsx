import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const FormContact = ({add}) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    // Function that create a new contact
    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact}className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input type='text' ref={nameRef} className='form-control form-control-lg' required autoFocus placeholder='Contact Name'/>
                <input type='text' ref={surnameRef} className='form-control form-control-lg' required placeholder='Surname'/>
                <input type='email' ref={emailRef} className='form-control form-control-lg' required placeholder='Email'/> 
            </div>
            <button type='submit' className='btn btn-primary btn-lg p-4 ms-2'>Add Contact</button>
        </form>
    );
};

FormContact.propTypes = {
    add: PropTypes.func.isRequired
};


export default FormContact;
