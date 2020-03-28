import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Dsiplay list of monsters
      // Array of objects
      monsters: []
    };
  }

  // Renders onto the DOM for 1st time and calls code written below
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Conor">
          {
            this.state.monsters.map(monster => (
              // map returns function we call and iterates over every element in the function
              // map creates new arrays on our existing arrays 
              <h1 key={monster.id}> {monster.name} </h1>
            ))}
        </CardList>
      </div>
    );
  }
}

export default App;
