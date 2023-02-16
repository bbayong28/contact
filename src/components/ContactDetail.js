import React from 'react'
import { Link, useParams } from 'react-router-dom'
import user from '../images/user.jpg'

const ContactDetail = ({contacts}) => {

  //const { id, name, email } = props.contact
  //console.log(contacts[0].name)
  const { id } = useParams();

  const v = contacts.find(contacts => String(contacts.id) === id);


  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className='content'>
          <div className='header'>{v.name}</div>
          <div className='descriptions'>{v.email}</div> 
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactDetail