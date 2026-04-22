/*
File: DeckDetail.jsx
Description: Page Displaying all of the details regarding a deck.
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React, {useContext} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import { useDecksContext } from "../context/DecksContext";

export default function DeckDetail(){

    const { id } = useParams();
    const navigate = useNavigate();
    const { getDeck, deleteDeck } = useDecksContext();

    const deck = getDeck(id);

    if(!deck) return(
        <div className="alert alert-warning">Deck not found. <button className="btn btn-outline-secondary" onClick={()=>navigate(-1)}>Back</button></div>
    )

    const gamesPlayed = deck.wins + deck.losses;
    const winRate = (deck.wins === 0)? 0 : (deck.wins/gamesPlayed)*100;

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title d-flex justify-content-between"><strong>{deck.name}</strong> <span className="badge text-bg-secondary">{deck.commander}</span></h3>
                <p className="card-text"><strong>Colour Identity:</strong> {deck.colours.join(", ")}</p>
                <p className="card-text"><strong>Bracket:</strong> {deck.bracket}</p>
                <p className="card-text"><strong>Games Played:</strong> {gamesPlayed}</p>
                <p className="card-text"><strong>Wins:</strong> {deck.wins}</p>
                <p className="card-text"><strong>Losses:</strong> {deck.losses}</p>
                <p className="card-text"><strong>Winrate:</strong> { winRate%1 >0? winRate.toFixed(1) : winRate }%</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-outline-secondary" onClick={()=>navigate(-1)}>Back</button>
                <Link className="btn btn-sm btn-outline-secondary" to={`/update/${deck.id}`}>Update Deck Details</Link>
            </div>
        </div>
    )
}