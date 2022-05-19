import './App.css';
import {useState} from 'react'

function App() {

  const [advice, setAdvice] = useState ('');

  const getAdvice = async () => {
    const response = await fetch (`https://www.boredapi.com/api/activity/ `);
    const data = await response.json ();
    console.log (data.activity);
    setAdvice (data.activity)
  }

  return (
    <div className='mainContainer'>

      <div className='container'>
        <h1> Bored? </h1>
      </div>

      <div className='container'>
      <button onClick={()=> {getAdvice()} }>View Tip</button>
      </div>

    <div className='container'>
      {advice}
    </div>

  </div>
  )
}

export default App;
