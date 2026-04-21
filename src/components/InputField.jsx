import React from 'react'

export default function InputField({ size, label, value, onChange, onBlur, error, placeholder }) {
  
  return (<div className={"col-" + size}>
    <label className="form-label">{label}</label>
    <input className={'form-control' + (error ? ' is-invalid' : '')}
           value={value} onChange={e => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder}/>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>)
}