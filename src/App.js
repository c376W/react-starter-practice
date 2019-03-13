import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26}
    ],
    otherState:'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons:[
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:27}
        ] })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'Stephanie', age:26}
        ] })
  }

  togglePersonsHandler = () =>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
          <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>Ha</Person>
          <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Max!')} changed = {this.nameChangedHandler}>Ha</Person>
          <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}>Ha</Person>
        </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working.</p>
        <button
          style={style} 
          //onClick={()=>this.switchNameHandler('Maxmilian!!')}
          onClick = {()=>this.togglePersonsHandler()}
          >Toggle Persons</button>
        {/* { this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>Ha</Person>
          <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Max!')} changed = {this.nameChangedHandler}>Ha</Person>
          <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}>Ha</Person>
        </div>: null
        } */}
        {persons}

      </div>
    );
  }
}

export default App;
