import React from 'react'

export default function SelectField({ size, label, value, options, onChange, onBlur, error, placeholder }) {

  return (<div className={"col-" + size}>
    <label className="form-label">{label}</label>
    <select className={'form-control' + (error ? ' is-invalid' : '')}
      value={value} onChange={e => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder}>
      <option value="">{placeholder}</option>
      {options.map(opt => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>)
}