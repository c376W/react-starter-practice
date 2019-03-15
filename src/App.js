import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id: 'asfa1', name: 'Max', age:28},
      {id: 'vasdf1',name: 'Manu', age:29},
      {id: 'asdf1',name: 'Stephanie', age:26}
    ],
    otherState:'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   //this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons:[
  //       {name: newName, age:28},
  //       {name: 'Manu', age:29},
  //       {name: 'Stephanie', age:27}
  //       ] })
  // }

  nameChangedHandler = (event,id) => {
    const personIndex =this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person ={...this.state.persons[personIndex]};
    //const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
    // this.setState({
    //   persons:[
    //     {name: 'Max', age:28},
    //     {name: event.target.value, age:29},
    //     {name: 'Stephanie', age:26}
    //     ] })
  }

  deletePersonHandler = (personIndex)=>{
    const persons=this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons})

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
            {this.state.persons.map((person,index)=>{
              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name = {person.name} 
              age ={person.age}
              key = {person.id}
              changed = {(event)=>this.nameChangedHandler(event, person.id)}/>
            })}
            {/* <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>Ha</Person>
            <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this,'Max!')} changed = {this.nameChangedHandler}>Ha</Person>
            <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}>Ha</Person> */}
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
