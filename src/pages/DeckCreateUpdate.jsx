import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDecksContext } from "../context/DecksContext";
import DeckForm from '../components/DeckForm'

export default function CreateUpdateDeck() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { getDeck, saveDeck} = useDecksContext();
  
  const deck = getDeck(id);

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Deck' : 'Create Deck'}</h2>
      <DeckForm initial={ deck } onSave={ saveDeck } onCancel={() => navigate(-1)} />
    </div>
  )
}
