import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DeckContext from '../context/DeckContext'

export default function DeckEntry({ deck }){

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></h5>
                <p className="card-text mb-1"><strong>Commander:</strong> {deck.commander}</p>
                <div>
                    <span className="badge text-bg-secondary">Bracket: {deck.bracket}</span>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <a className="btn btn-sm btn-outline-secondary" target="_blank" href={deck.decklist}>Moxfield</a>
                <Link className="btn btn-sm btn-outline-secondary" to={`/decks/${deck.id}`}>See Details</Link>
            </div>
        </div>
    )
}