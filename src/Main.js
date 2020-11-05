import React from 'react'
import { useAlert } from './alert/AlertContext'

const buttonStyles = {
    background: 'lightgreen',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '2px 5px 7px',
    padding: '2px 3px'
  }  

export default function Main(){

    const {toggle} = useAlert()
    const {visible} = useAlert()

    console.log('value of visible', visible)

    return (
        <>
            <h1>Hello from Context example</h1>
            <button onClick={toggle} style={buttonStyles}>Show an alert</button>
        </>
    )
}