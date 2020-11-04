import './App.css';
import React, {useState, useEffect, useRef, useMemo} from 'react'

const divStyles = {
  textOverflow: 'ellipsis',
  width: '60%',
  height: '40%',
  position: 'absolute',
  top: '0', 
  bottom: '20%', 
  left: '0', 
  right: '30%', 
  margin: 'auto',
  fontSize: '24px'
  }

const buttonStyles = {
  background: 'pink',
  borderRadius: '20%', 
  fontSize:'20px',
  fontWeight: 'bold',
  padding: '10px',
  outline: 'none',
  marginRight: '0.5rem',
  boxShadow: '5px 7px 10px',
  cursor: 'pointer'
}

const computedByBankDepo = (number) => {
  let i = 0
  while (i < 100000) i++
  console.log('..processing center ready')
  return number*100
}

function App() {
const [number, setNumber] = useState(20)
const [styledColor, setStyledColor] = useState(false)

// useMemo sect
const styledColoredButton = useMemo(() => ({
  background: styledColor ? 'lightblue' : 'pink',
  borderRadius: '50%', 
  width: '10%',
   height: '10%'
}), [styledColor])

const computedDepo = useMemo(() => {
  return computedByBankDepo(number)
}, [number])

useEffect(() => {
  console.log('Changed button color')
}, [styledColoredButton])

  return (
    <div style={divStyles }>
     <h1>Hello there? Can I help you?</h1>
     <h2>Bank accaunt: $ {computedDepo}</h2>
      <button onClick={() => setNumber((prev) => prev + 1)} style={buttonStyles}>Add</button>
      <button onClick={() => setNumber((prev) => prev - 1 )} style={buttonStyles}>Subtract</button>
      <button onClick={() => setStyledColor((prev) => !prev)} style={styledColoredButton}>.</button>
    </div>
  );
}

export default App;
