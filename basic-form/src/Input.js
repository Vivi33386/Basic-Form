import React from 'react'

export default function Input(props) {
  return (
    <div className='input'>
        <label htmlFor={`form-${props.name}`}>{props.label}</label>
    <input type={props.type} className='form-control' id={`form-${props.name}`} name={props.name} value={props.value} onChange={props.onChange}/>
    </div>
  )
}
