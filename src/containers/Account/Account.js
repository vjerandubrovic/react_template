// REACT
import React from 'react';
// REDUX
// COMPONENTS

// SCSS
import classes from './Account.module.scss';

const Account = (props) => {

    const { children } = props;

    return (
        <div className = { classes.Account }>
            Hello from Account
        </div>
    );
};

export default Account;