import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {

  // State
  constructor(props) {
    super(props);
    this.state = {
      contacts : []
    }
  }

  // Ciclo de vida despues de que se añade el componente al DOM
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  // Funcion remueve contacto
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id )
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div className="App">
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
