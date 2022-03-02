// REACT
import React from 'react';
// ANIMATIONS
import { AnimatePresence, motion } from 'framer-motion';
// COMPONENTS
import Backdrop from '../Backdrop/Backdrop';
// CSS
import classes from './Modal.module.scss';

const modal = props => {

    const {show, closeModal, children} = props;

    const modalAnimation = {
        initial: {
          opacity: 0,
          translateY: '-200%',
        },
        in: {
          opacity: 1,
          translateY: '0%',
        },
        out: {
          opacity: 0,
          translateY: '-200%',
        },
      };

      const modal = ( 
        <React.Fragment>
            <Backdrop show = { true } atClick = { closeModal } />
            <motion.div 
                initial = "initial"
                animate = "in"
                exit = "out"
                variants = { modalAnimation }
                className = { classes.Modal }
            >
                { children }
            </motion.div>
        </React.Fragment>
      );

    return(
        <AnimatePresence>
            { show && modal }
        </AnimatePresence> 
    );
};

export default modal;