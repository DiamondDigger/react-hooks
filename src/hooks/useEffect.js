import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
const [type, setType] = useState('users')
const [data, setData] = useState([])
const [pos, setPos] = useState({
  x: 0,
  y: 0
})

// console.log('Component render')

const changePos = (event) => {
  setPos({
    x: event.clientX,
    y: event.clientY
  })
}

useEffect(() => {
  console.log('Component did mount')

  window.addEventListener('mousemove', changePos)
  console.log('eventListener have been set')
},[])

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
  console.log('fetch')

  return () => {
    console.log('Clean type')
  }
  },[type])

  

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
      <h1>Type: {type}</h1>
      <button onClick={() => setType('users')} style={{width: '100px', height:'20px', fontSize:'16px'}}>Users</button>
      <button onClick={() => setType('todos')} style={{width: '100px', height:'20px', fontSize:'16px'}}>Todos</button>
      <button onClick={() => setType('posts')} style={{width: '100px', height:'20px', fontSize:'16px'}}>Posts</button>
      
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>

  );
}

export default App;
