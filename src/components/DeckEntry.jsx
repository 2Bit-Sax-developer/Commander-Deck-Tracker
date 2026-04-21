import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DeckContext from '../context/DeckContext'

export default function DeckEntry({ deck }){

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title"><Link to={`/deck/${deck.id}`}>{deck.name}</Link></h5>
                <p className="card-text mb-1"><strong>Commander:</strong> {deck.commander}</p>
                <span className="badge text-bg-secondary">Bracket: {deck.bracket}</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link className="btn btn-sm btn-outline-secondary" to={`/movies/${deck.id}`}>Details</Link>
            </div>
        </div>
    )
}