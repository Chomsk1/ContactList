import React, { Component } from "react";
import AddContact from "../AddContact/AddContact";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import "./App.css";
import "../AddContact/AddContact.css";
class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
    previousState: null
  };

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contactId !== contact.id)
    });
  };

  addContact = (name, number) => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name,
        number: number
      })
    });
  };

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <div className="App">
        <h1>List of people I might call someday</h1>
        <AddContact addContact={this.addContact} />
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
             
               { <IconButton onClick={() => this.removeContact(contact.id)} aria-label="Delete" >
                <DeleteIcon fontSize="small" />
              </IconButton>
               }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
