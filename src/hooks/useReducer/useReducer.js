import './App.css';
import React from 'react'
import Main from './Main'
import Alert from './alert/Alert'
import { AlertProvider } from './alert/AlertContext';

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

function App() {

  return (
    <AlertProvider>
      <div className={'container'} style={divStyles}>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App;
