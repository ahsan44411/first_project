import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>This is {props.name} and {props.gender} is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default Person;