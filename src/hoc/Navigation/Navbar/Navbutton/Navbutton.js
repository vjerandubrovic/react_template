// REACT
import React from 'react'
// CSS
import classes from './Navbutton.module.scss';

const navbutton = props => {

    const { atClick, show } = props;

    return (
        <React.Fragment>
            <input className = { classes.Navbutton_Check } onChange = { () => atClick( !show ) } type="checkbox" name="" id="" checked = { show }/>
            <div className = { classes.Navbutton_Burger } >
                    <span className = { classes.Navbutton_Burger_Line }></span>
                    <span className = { classes.Navbutton_Burger_Line }></span>
                    <span className = { classes.Navbutton_Burger_Line }></span>
            </div>
        </React.Fragment>
    );
};

export default navbutton;