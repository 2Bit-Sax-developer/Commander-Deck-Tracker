/*
File: DeckCreateUpdate.jsx
Description: Page for Creating and Updating Decks
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDecksContext } from "../context/DecksContext";
import DeckForm from '../components/DeckForm'

export default function CreateUpdateDeck() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { getDeck, updateDeck, addDeck} = useDecksContext();
  
  const deck = getDeck( id );

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Deck' : 'Create Deck'}</h2>
      <DeckForm deckID={id} initial={ deck } onSave={ id? updateDeck : addDeck } onCancel={() => navigate(-1)} />
    </div>
  )
}
