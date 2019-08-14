import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Components from './components/Components'

class App extends Component {
    render() {
        return (
            <React.Fragment>
              <Components></Components>
            </React.Fragment>
        )
    }
}

export default App;