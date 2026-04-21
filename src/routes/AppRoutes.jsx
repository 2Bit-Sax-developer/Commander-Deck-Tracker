import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import Decks from '../pages/Decks'
import DeckDetail from '../pages/DeckDetail'
import CreateEditDeck from '../pages/DeckCreateUpdate'
import NotFound from '../pages/NotFound'

export default function AppRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path='decks' element={<Decks/>}/>
                {<Route path='decks/:id' element={<DeckDetail/>}/>}
                <Route path="create" element={<CreateEditDeck/>} />
                <Route path="update/:id" element={<CreateEditDeck/>} />
                { /*<Route path='favorites' element={<Favorites/>}/>*/ }
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}