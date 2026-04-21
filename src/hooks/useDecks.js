import { useEffect, useState } from 'react'
import { DECKS } from '../decks';

const STORAGE_KEY = '2bit_deck_tracker';

export default function useDecks() {

    const [decks, setDecks] = useState([]);

    useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      /*
      console.log(raw);
      console.log(!raw);
      */

      if(!raw){

        setDecks(DECKS);

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

  function addDeck(data){

    setDecks(prev => [...prev, data]);
  }

  function updateDeck(id, patch){
    setDecks(prev => prev.map(p => (p.id === id ? {...p, ...patch} : p)));
  }

  function deleteDeck(data){
    setDecks(prev => prev.filter(p => p.id != id));
  }

  function resetStorage() {

    localStorage.removeItem(STORAGE_KEY);
    setDecks([]);
  }
}

