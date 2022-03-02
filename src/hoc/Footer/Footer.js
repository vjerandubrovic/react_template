// REACT
import React from 'react';
// REDUX
// COMPONENTS

// SCSS
import classes from './Footer.module.scss';

const Footer = props => {

    const { children } = props;

    return (
        <footer className = { classes.Footer }>
            <div>
                <h1 className = { classes.Footer_Title }>Footer&#169;{ new Date().getFullYear() }.</h1>
            </div>
        </footer>
    );
};

export default Footer;