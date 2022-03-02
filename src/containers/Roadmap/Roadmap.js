// REACT
import React from 'react';
// REDUX
// COMPONENTS

// SCSS
import classes from './Roadmap.module.scss';

const Roadmap = (props) => {

    const { children } = props;

    return (
        <div className = { classes.Roadmap }>
            Hello from Roadmap
        </div>
    );
};

export default Roadmap;