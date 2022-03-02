// REACT
import React, { useState } from 'react';
// REDUX
// COMPONENTS
import inputField from '../../../components/Form/InputField/input_field';
import getInputs from '../../../utility/get_inputs/get_inputs'
// SCSS
import classes from './Add_game_form.module.scss';

const Add_game_form = props => {

    const { children } = props;

    const [ name, name_handler ] = useState( {
        value: '',
        config: {
            type: 'text',
            id: 'name',
            placeholder: 'Name',
            title: 'Enter game name',
            required: true
        },
        valid: false,
        touched: false
    } );

    const set_name = () => {

    }

    const form_body = (
        <React.Fragment>
            <inputField 
                input_config = { name }
                atChange = { set_name }
            />
        </React.Fragment>
    )

    return (
        <form onSubmit = {  } className = { classes.Add_game_form }>
            { form_body }
        </form>
    );
};

export default Add_game_form;