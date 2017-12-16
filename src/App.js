import React, { Component } from 'react';
import './App.css';
import FetchData from './Components/Fetchdata';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state={posts: [] };
  }
    clicked(event)
    {
        this.forceUpdate();

    }
  render() {

    return (
      <div className="App">
        <div >
            <FetchData />
        </div>
      </div>
    );
  }
}

export default App;
