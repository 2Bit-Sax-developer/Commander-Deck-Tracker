import React from 'react'
import {DECKS} from '../decks'
import DeckEntry from '../components/DeckEntry'

export default function Decks(){
    return(
        <div>
            <h2>Decks</h2>
            <div className='row g-3'>
                {DECKS.map(d => (
                    <div className='col-sm-6 col-lg-4' key={d.id}>
                        <DeckEntry deck={d}/>
                    </div>
                ))}
            </div>
        </div>
    )
}