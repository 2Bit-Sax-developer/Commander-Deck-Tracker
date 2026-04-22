import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import useDecks from '../hooks/useDecks';
//import useFormValidation from '../hooks/useFormValidation';

export default function DeckForm(){

    function handleSubmit(e) {
    e.preventDefault();

    const es = validateAll();

    if(Object.values(es).every(v => !v)){

      onSave(values);

    }
  }

   return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        {/*TODO: Cancel button in edit mode*/}
      </div>
    </form>
  )
}