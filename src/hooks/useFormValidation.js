import {useState} from 'react'

export default function useFormValidation( initialValues, validators){

    const [values, setValues] = useState(initialValues);
    const [errors, setErorrs] = useState({});
    const [touched, setTouched] = useState({});

    function validateField( field, value ){

        const rule = validators[field];
        const msg = rule ? rule(value, values) : null;

        setErorrs({...errors,[field]:msg});

        return msg;
    }

    function handleChange( field, value ){

        setValues(v=>({...v,[field]:value}))
        validateField(field,value);
    }

    function handleBlur( field ){

        setTouched(t=>({...t, [field]:true} ));
        validateField(field, values[field]);
    }

    function validateAll(){

        const es = {};
        
        for( const k of Object.keys(validators)){

            es[k] = validators[k](values[k], values);
        }

        setErorrs(es);
        return es;
    }

    return {
        values, 
        errors, 
        touched, 
        handleChange, 
        handleBlur, 
        validateAll
    };
}