import React, { Component } from 'react';
import './App.css';
import request from 'request';

import Form from './components/Form';
import Display from './components/Display';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : []
    }
  }

  componentDidMount() {
    request('http://localhost:8080/contactList', (err, res, body) => {
      if(err) {
        console.log(err);
      }
      this.setState({contacts : JSON.parse(body)});
      console.log(this.state.contacts);
    });
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
          <h1>Welcome to Contact List!</h1>
          <Form action={'http://localhost:8080/contactList/addContact'}/>
          <Display contacts={this.state.contacts}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
