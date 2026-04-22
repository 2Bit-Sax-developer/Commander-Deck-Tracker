import React from 'react'
//import {DECKS} from '../decks'
//import {decks, useDecks} from '../hooks/useDecks'
import DeckEntry from '../components/DeckEntry'

export default function Decks( {decks} ){
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