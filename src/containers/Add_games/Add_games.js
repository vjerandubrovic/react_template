// REACT
import React from 'react';
// REDUX
// COMPONENTS
import Add_game_form from './Add_game_form/Add_game_form';
// SCSS
import classes from './Add_games.module.scss';

const Add_games = (props) => {

    const { children } = props;

    return (
        <div className = { classes.Add_games }>
            <Add_game_form />
        </div>
    );
};

export default Add_games;