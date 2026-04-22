/*
File: decksContext.jsx
Description: Context provider for decks
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import { createContext, useContext } from "react";
import useDecks from "../hooks/useDecks";

const DecksContext = createContext()

export function DecksProvider({ children }) {
  
  const decksData = useDecks();

  return <DecksContext.Provider value={decksData}>{children}</DecksContext.Provider>
}

export function useDecksContext(){
  return useContext(DecksContext)
}