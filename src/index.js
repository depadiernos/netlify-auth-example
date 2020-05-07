import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import logo from './logo.svg'
import './index.css'

function App() {
  const clickHandler = async url => {
    const res = await axios.put(url, { message: 'hi world' }, { headers: { Authorization: 'My Pretend Token Here' } })
    console.log(res.body)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome</p>
      </header>
      <button onClick={() => clickHandler('https://blissful-roentgen-8da48d.netlify.app/search2')}>Hit Me!</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
