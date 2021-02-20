import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>This is {props.name} and {props.gender} is {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;