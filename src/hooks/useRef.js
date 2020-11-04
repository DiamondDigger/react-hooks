import './App.css';
import React, {useState, useEffect, useRef} from 'react'

function App() {
  const [inputValue, setInputValue] = useState('inital value')

  const renderCount = useRef(1)
  const inputLink = useRef('')
  const prevInputValue = useRef('')

  console.log('it`s render time')
  console.log('renderCount', renderCount)

  useEffect(() => {
    renderCount.current++
    console.log('dom', inputLink.current.value)
  })

  useEffect(() => {
    prevInputValue.current = inputValue
    console.log('from prevVal inputValue:', inputValue)
    console.log('from prevVal prevValue:', prevInputValue.current)
  },[inputValue])

  const focus = () => {
    inputLink.current.focus()
  }

  return (
    <div 
    style={
      {
      textOverflow: 'ellipsis',
      width: '40%',
      height: '40%',
      position: 'absolute',
      top: '0', 
      bottom: '20%', 
      left: '0', 
      right: '30%', 
      margin: 'auto',
      fontSize: '24px'
      }}>
     <h1>Hello there! {renderCount.current} times =)</h1>
     <h1>Input: {inputLink.current.value}</h1>
     <h1>Prev input: {prevInputValue.current}</h1>
     <input ref={inputLink} type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
     <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
