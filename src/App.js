// REACT
import React, { Suspense } from 'react';
// ROUTING
import { Route, useLocation, Routes } from 'react-router-dom';
// LAYOUT
import Layout from './hoc/Layout/Layout';
import withRouter from './hoc/withRouter/withRouter';
// ANIMATION
import { AnimatePresence, motion } from 'framer-motion';
// COMPONENTS
import Home from './containers/Home/Home';
import Add_games from './containers/Add_games/Add_games';
import Roadmap from './containers/Roadmap/Roadmap';
import Todays_release from './containers/Todays_release/Todays_release';
import Account from './containers/Account/Account';
// LAZY LOADING

// ROUTES
const publicRoutes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/addgame', name: 'Add game', Component: Add_games },
  { path: '/roadmap', name: 'Roadmap', Component: Roadmap },
  { path: '/todaysrelease', name: 'Today\'s release', Component: Todays_release },
  { path: '/account', name: 'Account', Component: Account },
  { path: '*', Component: Home },
];

// Aplication
const App = () => {

  // hook for current route location
  const location = useLocation();
  
  // animation for changing pages
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  // creating pages
  const pages = publicRoutes.map(( { path, Component }, k ) => (
    <Route key = { path + k } path = { path } end element = {
        <motion.div
        initial = "initial"
        animate = "in"
        exit = "out"
        variants = { pageVariants }
      >
        <Component />
      </motion.div>
    } /> 
  ));

  // routes for nav element
  const navRoutes = publicRoutes.map(route => {
      return {
        path: route.path, 
        name: route.name,
      };
  })
  .filter(route => route.path !== '*' && route.path !== '/account' );

  // return JSX
  return (
    <React.Fragment>
      <Suspense fallback = { <p>Loading...</p> }>
        <Layout routes = { navRoutes }>
          <AnimatePresence exitBeforeEnter initial = { false }>
              <Routes location = { location } key = { location.pathname }>
                    { pages }
              </Routes>
          </AnimatePresence>
        </Layout>
      </Suspense>
    </React.Fragment>
  );
}

// export App wraped with withRouter to pass parameter
export default withRouter( App );