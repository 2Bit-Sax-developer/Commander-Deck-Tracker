import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DeckForm from '../components/DeckForm'

export default function CreateEditView( { products, addProduct, updateProduct }) {
  const { id } = useParams()
  const navigate = useNavigate()
  // TODO: if id present, preload data and onSave should update; else create

  //console.log(id);

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Deck' : 'Create Deck'}</h2>
      <DeckForm /* initial={} onSave={id? updateProduct : addProduct} onCancel={() => navigate(-1)} */ />
    </div>
  )
}
