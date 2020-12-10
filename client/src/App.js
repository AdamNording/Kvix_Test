import React, { Component } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

/**
 * This class fetch a get request to localhost:5000/programs. When the requested
 * data is received it sets the state to response from the server. 
 * To communicate with the server the proxy (in package.json) is set to the host and port of the 
 * server.
 * @author Adam Nording
 * @date 10/12/2020
 */
class App extends Component {

  state = {
    programsData: []
  };

  componentDidMount() {
    this.callBackendApi()
      .then(res => this.setState({ programsData: res }))
      .catch(error => console.log(error));
  };

  callBackendApi = async () => {
    const response = await fetch('/programs');
    const programs = await response.json();

    if (response.status !== 200) {
      throw Error(response.message);
    };

    return programs;
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.programsData}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
          />
        </div>
      </div>
    );
  }
}

export default App;