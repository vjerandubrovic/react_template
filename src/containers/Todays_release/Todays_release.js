// REACT
import React from 'react';
// REDUX
// COMPONENTS

// SCSS
import classes from './Todays_release.module.scss';

const Todays_release = props => {

    const { children } = props;

    return (
        <div className = { classes.Todays_release }>
            Hello from Todays Release
        </div>
    );
};

export default Todays_release;