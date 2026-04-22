/*
File: MultiSelectField.jsx
Description: Component for multi-select field
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from 'react'

export default function MultiSelectField({ size, label, value, options, onChange, onBlur, error, placeholder }) {

  return (<div className={"col-" + size}>
    <label className="form-label">{label}</label>
    <select multiple className={'form-control' + (error ? ' is-invalid' : '')}
      value={value || []} onChange={e => onChange(Array.from(e.target.selectedOptions, o => o.value))} onBlur={onBlur}>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>)
}