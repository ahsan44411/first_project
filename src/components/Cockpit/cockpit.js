import React from 'react';
import './cockpit.css';

const cockpit = (props) => {

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length < 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I am a react app</h1>
            <p className={classes.join(' ')}>Hi I am a React app function </p>

            <StyledButton
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}>
                Switch Name
            </StyledButton>

        </div>
    );

}

export default cockpit;