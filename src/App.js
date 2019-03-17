import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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


    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <ErrorBoundary key={person.id}><Person 
              click={()=>this.deletePersonHandler(index)}
              name = {person.name} 
              age ={person.age}
              key = {person.id}
              changed = {(event)=>this.nameChangedHandler(event, person.id)}/></ErrorBoundary>
            })}
            {/* <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>Ha</Person>
            <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this,'Max!')} changed = {this.nameChangedHandler}>Ha</Person>
            <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}>Ha</Person> */}
          </div>
        );

        btnClass = classes.Red;

    }

    //let classes = ['red','bold'].join(' ');
    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

    return (
  
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p className= {assignedClasses.join(' ')}>This is really working.</p>
        <button
          className = {btnClass}
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

// export default Radium(App);
export default App;