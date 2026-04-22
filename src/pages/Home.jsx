/*
File: Home.jsx
Description: Home page component
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react'
import { useDecksContext } from "../context/DecksContext";

export default function Home(){

  const {resetStorage} = useDecksContext();

  return (
    <div className="p-4 bg-light rounded">
      <h2>Welcome to the <strong>Commander Deck Tracker</strong></h2>
      <p>This ReactJS Web Application works as an archive of all of my current decks within Magic the Gathering's Commander format.</p>
      <button type="button" className='btn btn-outline-secondary' onClick={resetStorage}>Reset for Demo Purposes</button>
    </div>
  )
}