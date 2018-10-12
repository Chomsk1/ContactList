import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import "./AddContact.css";

class AddContact extends Component {
  state = {
    contactName: "",
    contactNumber: "",
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.contactName === "") {
      this.setState({
        error: new Error("You need to come up with a name!")
      });
      return;
    }
    if (this.state.contactNumber === "") {
      this.setState({
        error: new Error("You need to provide a number!")
      });
      return;
    }
    if (isNaN(this.state.contactNumber)) {
      this.setState({
        error: new Error("You need to provide a number!")
      });
      return;
    }
    this.props.addContact(this.state.contactName, this.state.contactNumber);
    this.setState({ contactName: "", contactNumber: "", error: null });
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
        <TextField
          label="Name"
          margin="normal"
          value={this.state.contactName}
          onChange={this.handleNameChange}
        />
        <TextField
          
          label="Number"
          margin="normal"
          value={this.state.contactNumber}
          onChange={this.handleNumberChange}
        />
        <Button
         type="submit"
          className="button"
          variant="fab"
          color="primary"
          aria-label="Add"
        >
          <AddIcon />
        </Button>
      </form>
    );
  }
}

export default AddContact;
