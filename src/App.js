import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Dsiplay list of monsters
      // Array of objects
      monsters: [],
      searchField: ''
    };
  }

  // Renders onto the DOM for 1st time and calls code written below
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    // Same as writing const monsters/searchField = this.state.monsters/searchField;
    const fileredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input
          type='search'
          placeholder='Search Monsters...'
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={fileredMonsters} />
      </div>
    );
  }
}

export default App;
