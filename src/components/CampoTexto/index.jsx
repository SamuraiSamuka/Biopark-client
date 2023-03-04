import React from 'react'

export default function CampoTexto({className, label, type, placeholder, name}) {
  return (
    <div className={`input ${className}`}>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type || "text"}
            placeholder={placeholder}
            name={name}
        />
    </div>
  )
}
