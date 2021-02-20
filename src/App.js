import './App.css';
import React, { useState } from 'react'
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

const App = props => {

  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'Ahsan', age: '25' },
      { name: 'Taha', gender: 'Man', age: '20' },
      { name: 'Areeb', age: '27' },
    ]
  });

  const SwitchNameHandler = () => {
    console.log('Clicked')
    setPersonState({
      persons: [
        { name: 'Maxi', age: '30' },
        { name: 'Taha', gender: 'Man', age: '20' },
        { name: 'Areeb', age: '23' },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi I am a React app function </h1>
      <button onClick={SwitchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} gender='Male' age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} gender={personsState.persons[1].gender} age={personsState.persons[1].age}>Hobbies: Not working!!!</Person>
      <Person name={personsState.persons[2].name} gender='Male' age={personsState.persons[2].age} />
    </div>
  );
}

export default App;



// state = {
//   persons: [
//     { name: 'Ahsan', age: '25' },
//     { name: 'Taha', gender: 'Man', age: '20' },
//     { name: 'Areeb', age: '27' },
//   ]
// }


