import React, { Component } from 'react';

class ListContacts extends Component {
  render () {

    return (
      <ol className='contacts-list'>
        {this.props.contacts.map( (contact) =>  (
          <li key={contact.id}>
            {contact.name}
            {/* <img src={contact.avatarURL} alt=""/> */}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;
