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
      { name: 'Areeb', age: 25 },
      { name: 'Ahsan', age: 23 },
      { name: 'Taha', age: 17 },
    ]
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Ahsan', age: 28 },
        { name: 'Taha', age: 22 },
      ]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Areeb', age: 28 },
        { name: event.target.value, age: 28 },
        { name: 'Taha', age: 22 },
      ]
    })
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I am a React app function </h1>

        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Areeb Mukhtar')}>
          Switch Name
          </button>

        <Person
          name={this.state.persons[0].name}
          gender='Male'
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Also Areeb')}
          changed={this.nameChangedHandler}
        >Hobbies: Not working!!!
      </Person>

        <Person
          name={this.state.persons[2].name}
          gender='Male'
          age={this.state.persons[2].age}
        />

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


