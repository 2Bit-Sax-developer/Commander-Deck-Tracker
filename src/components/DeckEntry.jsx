/*
File: DeckEntry.jsx
Description: Component for displaying deck entries
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

export default function DeckEntry({ deck }){

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title"><strong>{deck.name}</strong></h5>
                <p className="card-text mb-1"><strong>Commander:</strong> {deck.commander}</p>
                <div>
                    <span className="badge text-bg-secondary">Bracket: {deck.bracket}</span>
                    <span className="badge text-bg-secondary">{deck.colours.join(", ")}</span>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                { deck.decklist!= null ? <a className="btn btn-sm btn-outline-secondary" target="_blank" href={deck.decklist}>Moxfield</a> : <div/>}
                <Link className="btn btn-sm btn-outline-secondary" to={`/decks/${deck.id}`}>See Details</Link>
            </div>
        </div>
    )
}