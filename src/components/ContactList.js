import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

const ContactList = ({contacts, getContactId}) => {
//const ContactList = (props) => {
  console.log(contacts)
  //console.log(props.contacts[0].id)

  const deleteContactHandler = (id) => { 
    getContactId(id);
  };  

  
  const renderContactList = contacts.map((contact) => { 
    return (
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}/>
    )
  })

  return (
    <div className='ui main'>
      <h2 className='right'>
            Contact List
            <Link to="/add">
              <button className='ui button blue'>Add Contact</button>
            </Link>
            
          </h2>
      <div className='ui celled list'>{renderContactList}</div>
    </div>
  )
}

export default ContactList