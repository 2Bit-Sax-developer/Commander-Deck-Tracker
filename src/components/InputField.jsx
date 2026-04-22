/*
File: InputField.jsx
Description: Component for input field
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react'

export default function InputField({ size, label, type, value, onChange, onBlur, error, placeholder }) {
  
  return (<div className={"col-" + size}>
    <label className="form-label">{label}</label>
    <input className={'form-control' + (error ? ' is-invalid' : '')}
           value={value} onChange={e => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder}/>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>)
}