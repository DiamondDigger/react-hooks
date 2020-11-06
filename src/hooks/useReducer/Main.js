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

    const alert = useAlert()
    const {visible} = useAlert()

    console.log('value of visible', visible)

    return (
        <>
            <h1>Hello from Context example</h1>
            <button onClick={() => alert.show('This warning is from the Main component')} style={buttonStyles}>Show an alert</button>
        </>
    )
}