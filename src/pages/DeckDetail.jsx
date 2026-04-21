import React, {useContext} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import { DECKS } from '../decks';


export default function DeckDetail( {decks} ){

    const { id } = useParams();
    const navigate = useNavigate();
    const deck = DECKS.find(m => m.id === Number(id));

    if(!deck) return <div className="alert alert-warning">Deck not found.</div>

    return (
        <div className="card">
        <div className="card-body">
            <h3 className="card-title">{deck.name}</h3>
            <p className="card-text"><strong>Commander:</strong> {deck.commander}</p>
            <span className="badge text-bg-secondary">{deck.bracket}</span>
            <div className="mt-3 d-flex gap-2">
                <button className="btn btn-outline-secondary" onClick={()=>navigate(-1)}>Back</button>
                 <Link className="btn btn-sm btn-outline-secondary" to={`/update/${deck.id}`}>Update Deck Details</Link>
            </div>
        </div>
        </div>
    )
}