import React, {useState, useMemo} from 'react'
import {Link, Outlet} from 'react-router-dom'
//import {DECKS} from '../decks'

export default function Layout(){

    return (
        <div className="container py-3">
            <nav className="navbar navbar-expand bg-light rounded mb-3 px-3">
                <Link className="navbar-brand" to="/"><strong>Commander Deck Tracker</strong></Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/decks">Decks</Link>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}