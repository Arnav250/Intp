import React from 'react'
import '../styles/InputField.css'

function InputField({ type, placeholder, value, onChange, id }) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="visually-hidden">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  )
}

export default InputField
