import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDecksContext } from "../context/DecksContext";
import DeckForm from '../components/DeckForm'

export default function CreateUpdateDeck() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { getDeck, addDeck, updateDeck} = useDecksContext();
  
  const deck = getDeck(id);
  // TODO: if id present, preload data and onSave should update; else create

  //console.log(id);

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Deck' : 'Create Deck'}</h2>
      <DeckForm initial={ deck } onSave={id? updateDeck : addDeck} onCancel={() => navigate(-1)} />
    </div>
  )
}
