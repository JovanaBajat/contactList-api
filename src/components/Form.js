import React, { Component } from 'react';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Form extends Component {

  render() {
    const style = {
  margin: 12
};
    return (
      <div>
      <form method="POST" action={this.props.action}>
      <TextField
        hintText="Name"
        name="nom"
      /><br />
      <TextField
        hintText="Last name"
        name="prenom"
      /><br />
      <TextField
          hintText="titre"
          name="titre"
      /><br />
      <TextField
        hintText="entreprise"
        name="entreprise"
      /><br />
      <TextField
          hintText="email"
          name="email"
          type="email"
      /><br />
      <TextField
          hintText="adresse"
          name="adresse"
      /><br />
      <TextField
          hintText="telephone mobile"
          name="telephone.mobile"
      /><br />
      <TextField
          hintText="telephone work"
          name="telephone.work"
      /><br />
    <RaisedButton label="Submit" type="submit" primary={true} style={style}/>
  </form>
    </div>
    );
  }

}

export default Form;
