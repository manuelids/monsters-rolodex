import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
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

  //Arrow functions will bind the context where the arrow function is declared automatically 
  //This is called Flexible Scopping (ES6)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
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
        <h1>Monsters Rolodex</h1>
        
        {/* Search Box Component */}
        <SearchBox 
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />

        {/* CardList Component */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;