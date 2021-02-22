import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>This is {props.name} and {props.gender} is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default Person;