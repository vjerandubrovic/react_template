// REACT
import React from 'react';
// COMPONENTS
import SelectOption from '../Select_option/Select_option';
// CSS
import classes from './Input_field.module.scss'

const input_field = props => {

    const { input_config, atChange } = props;

    const value = input_config.value;

    const configuration = input_config.config;

    let cssClasses = classes.InputField_Span;

    if( input_config.touched && !input_config.valid ) cssClasses = [ classes.InputField_Span, classes.invalid ].join(' ');

    let input = (
        <input 
            className = { classes.InputField_Input }
            ref = { configuration.ref }
            type = { configuration.type }
            name = { configuration.id }
            id = { configuration.id }
            list = { configuration.list }
            value = { value }
            title = { configuration.title }
            step = { configuration.step }
            required
            onChange = { ( e ) => atChange( e.target.value ) }
        />
    );

    if( configuration.type === 'select' ) {
        let options;

        if( value !== '' ) options = value.map( option => <Select_option 
            key = { option.acronym }
            value = { option.acronym }
            text = { option.measure }
        /> );

        input = (
            <select 
                className = { classes.InputField_Select }
                name = { configuration.id }
                id = { configuration.id }
                title = { configuration.title }
                onChange = { (e) => atChange( e.target.value ) }
            >
                { options }
            </select>
        );
    }

    if( configuration.type === 'checkbox' ) {
        input = ( 
            <input 
                className = { classes.InputField_Checkbox }
                ref = { configuration.ref }
                type = { configuration.type }
                name = { configuration.id }
                id = { configuration.id }
                list = { configuration.list }
                value = { value }
                checked = { value }
                title = { configuration.title }
                onChange = { ( e ) => atChange( e.target.value ) }
            />
        );
    }

    return(
        <div className = { classes.InputField }>
            { input }
            <label className = { classes.InputField_Label } htmlFor = { configuration.id }>
                <span className = { cssClasses }>
                    { configuration.placeholder }
                </span>
            </label>
        </div>
    );
};

export default input_field;