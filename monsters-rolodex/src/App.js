import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    // Fetch the monsters from the api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    //Destructure mode for assigning copies of monsters and searchField
    const { monsters, searchField } = this.state;

    //Filter the monsters before we render the component
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase()
        .includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        {/* Search Bar */}
        <input 
          type="search" 
          placeholder="Search monsters" 
          onChange={e => this.setState({ searchField: e.target.value })}
        />

        {/* CardList Component */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;