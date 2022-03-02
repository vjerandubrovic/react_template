// REACT
import React from 'react';
// REDUX
// COMPONENTS
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
// SCSS
import classes from './Layout.module.scss';

// layout component
const layout = props => {
    
    // get passed properties
    const { children, routes } = props;

    // return JSX
    return (
        <React.Fragment>
            <Navigation routes = { routes }/>
            <main className = { classes.Layout }>
                { children } 
            </main>
            <Footer />
        </React.Fragment>
    );
};

// export layout
export default layout;