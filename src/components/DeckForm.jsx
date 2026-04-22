/*
File: DeckForm.jsx
Description: Form for creating and updating Decks
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react';
import InputField from './InputField';
import MultiSelectField from './MultiSelectField';
import useFormValidation from '../hooks/useFormValidation';
import { useDecksContext } from "../context/DecksContext";

const isValidInt = (v) => {
  //const n = Number(v);
  return Number.isInteger(v);
};

const validators = {
  name: (v)=> 
    { 
      if(!v.trim()) return 'A deck name is required'; 
      return null
    },
  commander: (v)=> 
    { 
      if(!v.trim()) return 'A commander is required'; 
      return null; 
    },
  colours: (v)=> 
    { 
      if (!Array.isArray(v) || v.length === 0) return "At least one colour is required";

      return null; 
    },
  bracket: (v)=> 
    { 
      const n = Number(v);

      if (!v?.toString().trim()) return "The Bracket is required";
      if (!isValidInt(n)) return "Bracket must be an integer";
      if (n < 1 || n > 5) return "Bracket must be between 1 and 5";

      return null;
    },
  wins: (v)=> 
    { 
      const n = Number(v);

      if (!isValidInt(n)) return "Wins must be an integer";
      if (n < 0) return "Wins cannot be negative";

      return null;
    },

  losses: (v)=> 
    { 
      const n = Number(v);

      if (!isValidInt(n)) return "Losses must be an integer";
      if (n < 0) return "Losses cannot be negative";

      return null;
    },
  decklist: (v)=> 
    { 
      //Will need to put validator here soon.

      return null; 
    }
}

const defaultDeck = {
  name: "",
  commander: "",
  bracket: 1,
  colours: [],
  decklist: "",
  wins: 0,
  losses: 0
};

export default function DeckForm( { deckID = null, initial = defaultDeck, onSave, onCancel} ){

  const {values, errors, touched, handleChange, handleBlur, validateAll} = useFormValidation(initial, validators);

  const { colours, decks } = useDecksContext();

  const nextID = (decks.length == 0)? 1 : decks.length;

  const id = deckID ?? nextID;

  function handleSubmit(e) {
    e.preventDefault();

    const es = validateAll();

    if(Object.values(es).every(v => !v)){

      values.id = parseInt(id);

      values.bracket = parseInt(values.bracket);
      values.wins = parseInt(values.wins);
      values.losses = parseInt(values.losses);

      (deckID == null)? onSave(values) : onSave(id, values);

      onCancel();
    }

  }

   return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <InputField size={"md-6"}  label="Deck Name" value={values.name} onChange={v=>handleChange('name',v)} onBlur={()=>handleBlur('name')} error={touched.name && errors.name} placeholder=""></InputField>
      <InputField size={"md-6"}  label="Commander" value={values.commander} onChange={v=>handleChange('commander',v)} onBlur={()=>handleBlur('commander')} error={touched.commander && errors.commander} placeholder=""></InputField>
      <InputField size={"md-3"}  label="Deck Bracket" value={values.bracket} onChange={v=>handleChange('bracket',v)} onBlur={()=>handleBlur('bracket')} error={touched.bracket && errors.bracket} placeholder="1-5"></InputField>
      <MultiSelectField size={"md-9"} label="Colour Identity" value={values.colours} options={colours} onChange={v=>handleChange('colours',v)} onBlur={()=>handleBlur('colours')} error={touched.colours && errors.colours} placeholder="Choose Colours"></MultiSelectField>
      <InputField size={"md-6"} label="Decklist (Moxfield)" value={values.decklist} onChange={v=>handleChange('decklist',v)} onBlur={()=>handleBlur('decklist')} error={touched.decklist && errors.decklist} placeholder=""></InputField>
      <InputField size={"md-3"}  label="Games Won" value={values.wins} onChange={v=>handleChange('wins',v)} onBlur={()=>handleBlur('wins')} error={touched.wins && errors.wins} placeholder=""></InputField>
      <InputField size={"md-3"}  label="Games Lost" value={values.losses} onChange={v=>handleChange('losses',v)} onBlur={()=>handleBlur('losses')} error={touched.losses && errors.losses} placeholder=""></InputField>
      <div className="col-12 d-flex gap-2">
        <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>Cancel</button>
        <button className="btn btn-primary" type="submit">Save</button>
      </div>
    </form>
  )
}