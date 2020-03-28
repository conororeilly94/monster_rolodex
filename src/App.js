import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
    // Same as writing --> const monsters/searchField = this.state.monsters/searchField;
    const fileredMonsters = monsters.filter(monster =>
      // Filter --> Filter out elements based on function we pass. Will give back new array
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      // Includes --> Takes single argument. Checks inside array to check if element we passed exists in array
    )
    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters...'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={fileredMonsters} />
      </div>
    );
  }
}

export default App;
