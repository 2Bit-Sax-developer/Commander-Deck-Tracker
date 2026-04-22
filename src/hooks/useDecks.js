/*
File: useDecks.js 
Description: Hook for handling decks within the app
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import { useEffect, useState } from 'react'

const STORAGE_KEY = '2bit_deck_tracker';

const seed = [
    { id: 1, name: "Local Dragon Terraforms and Reanimates", commander: "Teval, the Balanced Scale", colours: [ "Green", "Black", "Blue" ], bracket: 4, wins: 5, losses: 15, decklist: "https://moxfield.com/decks/lPHJAMqcGEmXdL31tJZGpw" },
    { id: 2, name: "Sugar Momma Jolene, What a Queen", commander: "Jolene the Plunder Queen", colours: [ "Green", "Red" ], bracket: 3, wins: 7, losses: 4, decklist: "https://moxfield.com/decks/vKfyADqzGUicxQR2OMhLWg" },
    { id: 3, name: "SPAAAAAACCEEEEEE", commander: "Inspirt, Flagship Vessel", colours: [ "Red", "Blue", "White" ], bracket: 2, wins: 2, losses: 8, decklist: "https://moxfield.com/decks/32L2ONqE4kelGFLDrc_5hg" },
    { id: 4, name: "Landfall? No. LandSMASH!", commander: "Hearthhull, the Worldseed", colours: [ "Green", "Black", "Red" ], bracket: 2, wins: 6, losses: 5, decklist: "https://moxfield.com/decks/fNQ51vcPw06vCZmtf1yuCA" },
    { id: 5, name: "Artistic Asswhoopin'", commander: "Rootha, Mastering the Moment", colours: [ "Red", "Blue" ], bracket: 2, wins: 0, losses: 1, decklist: "https://moxfield.com/decks/fYcMwVq0z0CuV-5u7MhmzA" },
    { id: 6, name: "India Jones w/ a Trunk", commander: "Quintorius, History Chaser", colours: [ "Red", "White" ], bracket: 2, wins: 0, losses: 0, decklist: "https://moxfield.com/decks/zZSn5VCulk-LtKI5_YxGlQ" }
];

export default function useDecks() {

    const [decks, setDecks] = useState([]);
    const [query, setQuery] = useState('');
    const colours = [ "Green", "Black", "Red", "Blue", "White" ];

    useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      /*
      console.log(raw);
      console.log(!raw);
      */

      if(!raw){

        setDecks(seed);

      } else {

        const data = JSON.parse(raw);
        Array.isArray(data) ? setDecks(data) : setDecks([]);

      }
    } catch{
      setDecks([]);
    }
  }, []);

  //persist to localStorage whenever decks change
  useEffect(() => {

    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    } catch {}
    
  }, [decks]);

  function getDeck(id){
    return decks.find(d => d.id === parseInt(id));
  }

  function addDeck(data){

    setDecks(prev => [...prev, data]);
    
  }

  function updateDeck(id, patch){
    setDecks(prev => prev.map(p => (p.id === parseInt(id) ? {...p, ...patch} : p)));
  }

  function deleteDeck(id){
    setDecks(prev => prev.filter(p => p.id != parseInt(id)));
  }

  function resetStorage() {

    localStorage.removeItem(STORAGE_KEY);
    setDecks(seed);
  }

  return {
    decks, setDecks,
    query, setQuery,
    colours,
    getDeck,
    addDeck,
    updateDeck,
    deleteDeck,
    resetStorage,
  }
}

