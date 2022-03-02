const check_validity = ( input, config ) => {
    let isValid = true;

    if( config.type === "email" ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(input) && isValid;
    }

    if( config.type === "textarea" ) {
        const pattern = /^[A-Za-z0-9ČĆĐŠŽčćđšž.,?!:;%&/'\n ]{1,500}$/;
        isValid = pattern.test(input) && isValid;
    }

    if( config.type === "tel" ) {
        const pattern = /^[0-9]{7,12}$/;
        isValid = pattern.test(input) && isValid
    }

    if( config.isText ) {
        const pattern = /^[A-Za-z0-9ČĆĐŠŽčćđšž.%' ]{1,50}$/;
        isValid = pattern.test(input) && isValid;
    }

    if( config.isNumber ) {
        const pattern = /^[0-9.,]{1,7}$/;
        isValid = pattern.test(input) && isValid;
    }

    // if(config.required){
    //     isValid = input.trim() !== '' && isValid;
    // }

    if( config.minLength ) {
        isValid = input.length >= config.minLength && isValid
    }

    return isValid
};

export default check_validity;