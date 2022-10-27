import React, {useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import '../../App.css';
import FormContact from '../pure/forms/formContact';


const CreateContactComponent = () => {

  const defaultContact1 = new Contact('Pedro Jose', 'Escobar Lopez', 'pedroescobar@gmial.com', false);
  const defaultContact2 = new Contact('Daniel Gonzales', 'Escobar Lopez', 'pedroescobar@gmial.com', true);
  const defaultContact3 = new Contact('Alejandro Gomez', 'Escobar Lopez', 'pedroescobar@gmial.com', true);

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

  // Function that change the state of connection
  function connectionOffOn(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact[index].connected = !tempContact[index].connected;
    setContacts(tempContact);
  }

  // Function for remove contacts
  function removeContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact);
  }

  // Function that add a new contact
  function addContact(newContact) {
    const tempContact = [...contacts];
    tempContact.push(newContact);
    setContacts(tempContact);
  }

  return (
    <div className=''>
      <div className='col-12'>
        <div className='card' style={{width: '700px'}}>
          {/* Card Header (title) */}
          <div className='card-header p-3 '>
            <h5>
              Your Contacts:
            </h5>
          </div>
          {/* Card Body (content) */}
          <div className='card-body' data-mbd-perfect-scrollbar='treu' style={{ position: 'relative', height: '400px' }}>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Surname</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Conected</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) =>{
                  return(
                    <ContactComponent 
                      contact={contact}
                      key={index}
                      offOn={connectionOffOn}
                      remove={removeContact}>
                    </ContactComponent> 
                  )
                })

                }
              </tbody>
            </table>
          </div>
        </div>
       </div>
       <FormContact
          add={addContact}>
       </FormContact>
    </div>
  )
}

export default CreateContactComponent; 
