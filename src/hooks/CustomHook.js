import './App.css';
import React, {useState, useEffect} from 'react'

const divStyles = {
  width: '60%',
  height: '50%',
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  margin: 'auto'
}

const useLogger = (value) => useEffect(() => {
  console.log(value)
  }, [value])

const useInput = (initialValue) => {
  const[value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value, onChange, clear
  }
}

function App() {
  const inputName = useInput('name')
  const inputSurname = useInput('surname')

  useLogger(inputName.value)
  useLogger(inputSurname.value)

  return (
    <div style={divStyles}>
      <input type='text' {...inputName.bind}/> 
      <button onClick={inputName.clear}>Clear</button>
      <h1>{inputName.value}</h1>
      <input type='text' {...inputSurname.bind}/>
      <button onClick={inputSurname.clear}>Clear</button>
      <h1>{inputSurname.value}</h1>
      </div>
  )
}

export default App;
