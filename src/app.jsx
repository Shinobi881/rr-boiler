import './stylesheets/main.scss';
import { Card, Button } from 'belle';
import React, { Component } from 'react';
import axios from 'axios';

axios.get('/jobs')
  .then(data => {
    console.log(data);
  });

class App extends Component {
  render() {
    return (
      <div>
        <Card className='app-card' >
          <h1 className='title'>This works</h1>
        </Card>
        <Button primary>Follow</Button>
      </div>
    );
  }
}

export default App;
