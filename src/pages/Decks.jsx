/*
File: Decks.jsx
Description: Page displaying all of the decks
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react'
import { useDecksContext } from "../context/DecksContext";
import DeckEntry from '../components/DeckEntry'
import { Link } from 'react-router-dom';

export default function Decks(){

    const { decks } = useDecksContext();
    
    return(
        <div>
            <h2>Decks</h2>
            {decks.length === 0 ? (
                <div className="alert alert-info">
                    No decks found. <Link to={'/create'}>Create your first deck to get started.</Link>
                </div>
            ) : (
                <div className="row g-3">
                    {decks.map(d => (
                        <div className="col-sm-6 col-lg-4" key={d.id}>
                        <DeckEntry deck={d} />
                     </div>
                    ))}
            </div>
        )}
        </div>
    )
}