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