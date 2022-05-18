import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [advice, setAdvice] = useState ('');
  const [hidden, setHidden] = useState(true);

  useEffect (() => {getAdvice()}, [] )

  const getAdvice = async () => {
    const response = await fetch (`https://www.boredapi.com/api/activity/ `);
    const data = await response.json ();
    console.log (data.activity);
    setAdvice (data.activity)
  }

  const showAdvice =() => {
    setHidden (s => !s)
  }
  return (
    <div className='mainContainer'>

      <div className='container'>
        <h1> Bored? </h1>
      </div>

      <div className='container'>
      <button onClick={()=> {getAdvice(); showAdvice()} }>  View Tip</button>
      </div>

    <div className='container'>
      {!hidden? <h2> '' {advice} '' </h2> : null }
    </div>

  </div>
  )
}

export default App;
