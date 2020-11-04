import './App.css';
import React, {useState, useEffect, useMemo, useCallback} from 'react'
import { ItemsList } from './hooks/ItemsList';

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

function App() {
const [number, setNumber] = useState(0)
const [styledColor, setStyledColor] = useState(false)

// useMemo section
const styledColoredButton = useMemo(() => ({
  background: styledColor ? 'lightblue' : 'pink',
  borderRadius: '50%', 
  width: '10%',
   height: '10%'
}), [styledColor])

useEffect(() => {
  console.log('Changed button color')
}, [styledColoredButton])

const dataFromApi = useCallback(() => {
  return new Array(number).fill('').map((_, i) => `Item № ${i+1}` )
}, [number])

  return (
    <div style={divStyles }>
     <h1>Hello there? Can I help you?</h1>
     <h2>Bank accaunt: $ {number}</h2>
      <button onClick={() => setNumber((prev) => prev + 1)} style={buttonStyles}>Add</button>
      <button onClick={() => setStyledColor((prev) => !prev)} style={styledColoredButton}>.</button>
      <ItemsList getItems={dataFromApi} />
    </div>
  );
}

export default App;
