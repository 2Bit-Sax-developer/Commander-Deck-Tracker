import React, {useState, useMemo} from 'react'
import {Link, Outlet} from 'react-router-dom'
//import {DECKS} from '../decks'
import DeckContext from '..context/DeckContext'

export default function Layout(){

  return (
    <DeckContext.Provider value={value}>
        <div className="container py-3">
            <nav className="navbar navbar-expand bg-light rounded mb-3 px-3">
                <Link className="navbar-brand" to="/">2 Bit Commander Deck Tracker</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    {/*<Link className="nav-link" to="/movies">Movies</Link>*/}
                </div>
            </nav>
            <Outlet/>
        </div>
    </DeckContext.Provider>
  )
}