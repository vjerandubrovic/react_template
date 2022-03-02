// REACT
import React from 'react';
// REDUX
// COMPONENTS

// SCSS
import classes from './Home.module.scss';

const Home = (props) => {

    const { children } = props;

    return (
        <div className = { classes.Home }>
            Hello from Home
        </div>
    );
};

export default Home;