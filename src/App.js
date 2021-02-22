import './App.css';
import React, { Component } from 'react'
import Person from './Person/Preson'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I am a React app function </h1>
//       <Person name='Ahsan' gender='Male' age='23'/>
//       <Person name='Taha' gender='Male' age='17'>Hobbies: Not working!!!</Person>
//       <Person name='Areeb' gender='Male' age='25'/>
//     </div>
//   );
// }

// const App = props => {

//   const [personsState, setPersonState] = useState({
//     persons: [
//       { name: 'Ahsan', age: '25' },
//       { name: 'Taha', gender: 'Man', age: '20' },
//       { name: 'Areeb', age: '27' },
//     ]
//   });

//   const SwitchNameHandler = () => {
//     console.log('Clicked')
//     setPersonState({
//       persons: [
//         { name: 'Maxi', age: '30' },
//         { name: 'Taha', gender: 'Man', age: '20' },
//         { name: 'Areeb', age: '23' },
//       ]
//     });
//   };

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Areeb', age: 25 },
      { id: 2, name: 'Ahsan', age: 23 },
      { id: 3, name: 'Taha', age: 17 },
    ],
    showPersons: false
  }


  togglePersonsHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Ahsan', age: 28 },
        { name: 'Taha', age: 22 },
      ]
    })
  }


  deleteNameHandler = (personIndex) => {
    console.log(personIndex)
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(event.target.name)

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>

      );
    }

    return (
      <div className="App">
        <h1>Hi I am a React app function </h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>

        {person}

      </div>
    );
  }
}
export default App;



// state = {
//   persons: [
//     { name: 'Ahsan', age: '25' },
//     { name: 'Taha', gender: 'Man', age: '20' },
//     { name: 'Areeb', age: '27' },
//   ]
// }


