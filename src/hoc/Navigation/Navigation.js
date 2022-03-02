// REACT
import React from 'react';
// COMPONENTS
import Navbar from './Navbar/Navbar';
// CSS
import classes from './Navigation.module.scss';

// navigation component that is memorized/do not re_render if not needed
const navigation = React.memo( props => {

    // get passed properties
    const { routes } = props;
    
    // return JSX
    return(
        <header>
            <nav className = { classes.Navigation }>
                <Navbar routes = { routes }/>
            </nav>
        </header>
    );
});

// export navigation
export default navigation;