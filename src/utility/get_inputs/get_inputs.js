// UTILITY
import check_validity from '../check_validity/check_validity';

const get_inputs = ( input_value, input_config, input_handler ) => {

    input_handler( prev => {
        const check = check_validity( input_value, input_config );

        return {
            ...prev, 
            value: input_value, 
            valid: check, 
            touched: true 
        }

    });
};

export default get_inputs;