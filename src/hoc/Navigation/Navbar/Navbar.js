// REACT
import React, { useState } from 'react';
// REDUX
// COMPONENTS
import Navlink from './Navlink/Navlink';
import Navbutton from './Navbutton/Navbutton';
// CSS
import classes from './Navbar.module.scss';

// Navbar component that is memorized/do not re_render if not needed
const Navbar = React.memo( props => {
    // useState hook for displaying navigation
    const [ displayNav, displayNavHandler ] = useState( true );

    // get passed properties
    const { routes } = props;
    
    // navigation for screens with width > 1200px
    let nav = (
        <React.Fragment>
            <ul className = { classes.Navbar }>
                { routes.map( route => <Navlink key = { route.name } href = { route.path } exact = { true } >{ route.name }</Navlink> ) }
                <Navlink href = "/account" >Account</Navlink>
            </ul>
        </React.Fragment>
    );

    // navigation for screens with width < 1200px
    if( window.screen.width < 1200 ) {
        nav = (
            <React.Fragment>
                <ul className = { classes.Navbar }>
                    { routes.map( route => <Navlink key = { route.name } href = { route.path } exact = { true } atClick = { displayNavHandler }>{ route.name }</Navlink> ) }
                    <Navlink href = "/account" atClick = { displayNavHandler } >Account</Navlink>
                </ul>
            </React.Fragment>
        );
    }

    // return JSX
    return (
        <React.Fragment>
            <Navbutton 
                atClick = { displayNavHandler }
                show = { displayNav }
            />
            { displayNav && nav }
        </React.Fragment>
    );
});

// export Navbar
export default Navbar;