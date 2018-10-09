import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = { contacts: [
    {
      id: 1,
      name: 'Andrzej',
      number: '255439029'
    },
    {
      id: 2,
      name: 'Dżon',
      number: '888777222'
    },
    {
      id: 3,
      name: 'Wisława',
      number: '444938092'
    }
  ] }

    removeContact = contactId => {
      this.setState({
        contacts: this.state.contacts.filter(
          contact => contactId !== contact.id
        )
      })
    }

  render() {
    return (
      <div className="App">
        <h1>List of people I might call someday</h1>

        <ul>
          {
            this.state.contacts.map( contact => (
              <li key={contact.id}>{contact.name}      {contact.number}
              
              {
                <button onClick={() => this.removeContact(contact.id)}>Remove</button>
              }
              </li>
            )
          )


          }

        </ul>

      </div>
    );
  }
}

export default App;
