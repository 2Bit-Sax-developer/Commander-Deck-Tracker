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
}

