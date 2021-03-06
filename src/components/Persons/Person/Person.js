import React from 'react'
import './Person.css'
import styled from 'styled-components';

const Person = (props) => {

    const StyledDiv = styled.div`
        width:60%;
        margin: auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        '@media (min-width: 500px)': {
            width: '450px'
        }
    `;

    return (
        <StyledDiv>
            <p onClick={props.click}>This is {props.name} and {props.gender} is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}/>
        </StyledDiv>
    )
}

export default Person;