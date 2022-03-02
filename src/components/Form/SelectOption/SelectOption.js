// REACT
import React from 'react';
// SCSS
import classes from './SelectOption.module.scss';

const selectOption = props => {
    return (
        <React.Fragment>
            <option className = { classes.SelectOption } value = { props.value }>
                { props.text }
            </option>
        </React.Fragment>
    );
};

export default selectOption;