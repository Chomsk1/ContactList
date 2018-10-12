import React, { Component } from "react";

class AddContact extends Component {
  state = {
    contactName: "",
    contactNumber: '',
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.contactName === "") {
      this.setState({
        error: new Error("You need to come up with a name")
      });
      return;
    }
    if (this.state.contactNumber === "") {
        this.setState({
          error: new Error("You need to provide a number")
        });
        return;
      } 
    if (isNaN(this.state.contactNumber)) {
        this.setState({
            error: new Error("You need to provide a number")
          });
          return;
    }  
    this.props.addContact(this.state.contactName, this.state.contactNumber);
    this.setState({ contactName: "", contactNumber: '', error: null });
  };

  handleNameChange = event => {
    this.setState({
      contactName: event.target.value
    });
  };

  handleNumberChange = event => {
    this.setState({
      contactNumber: event.target.value
    });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <p>{this.state.error.message}</p>}
        <input
          placeholder="Add contact name"
          value={this.state.contactName}
          onChange={this.handleNameChange}
        />
         <input
          placeholder="Add contact number"
          value={this.state.contactNumber}
          onChange={this.handleNumberChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddContact;
