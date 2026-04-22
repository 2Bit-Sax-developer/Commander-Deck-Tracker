import React from 'react'
import { useDecksContext } from "../context/DecksContext";
import DeckEntry from '../components/DeckEntry'

export default function Decks(){

    const { decks } = useDecksContext();

    return(
        <div>
            <h2>Decks</h2>
            <div className='row g-3'>
                {decks.map(d => (
                    <div className='col-sm-6 col-lg-4' key={d.id}>
                        <DeckEntry deck={d}/>
                    </div>
                ))}
            </div>
        </div>
    )
}