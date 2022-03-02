// REACT
import React from 'react';
// ROUTER
import { NavLink } from 'react-router-dom';
// CSS
import classes from './Navlink.module.scss';

const navlink = React.memo( props => (
    <li onClick = { () => props.atClick && props.atClick( false ) }>
        <NavLink 
            to = { props.href } 
            end = { props.exact }
            className = { ( { isActive } ) => "" + ( isActive ? classes.Active : "" ) }
        >
            { props.children }
        </NavLink>
    </li>
));

export default navlink;