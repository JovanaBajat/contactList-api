import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import Form from './Form';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false
    }
  }

  handleOpen = (index) => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

  render() {
    const style = {
  margin: 12,
};
    return (
      <div className="displayBody">
        <ul>{this.props.contacts.map((contact, index) => {
          return(
            <li key={index}>
              {contact.titre} {contact.nom} {contact.prenom}, <br/>
              Societe : {contact.entreprise}, <br/>
              Email : {contact.email} <br/>
              Address : {contact.adresse} <br/>
              Mobil phone : {contact.telephone.mobile} <br/>
              Work phone : {contact.telephone.work} <br/>
              <a href={`http://localhost:8080/contactList/${contact._id}/delete`}>
                  <RaisedButton label="Delete" primary={true} style={style} />
              </a>
            <RaisedButton onClick={() => this.handleOpen(index)} label="Edit" primary={true} style={style} />
            <Dialog
              title="Edit contact"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>

              <Form action={`http://localhost:8080/contactList/${contact._id}/update`}/>
            </Dialog>

            </li>
          )
        })}
      </ul>
      </div>
    );
  }

}

export default Display;
