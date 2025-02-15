import { useState } from 'react';
import './App.css'

function App() {

  const[count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='box'>
      <div className='heading'>Increment & Decrement</div>
      <div className='button-box'>
        <button onClick={decreaseHandler} className='mbutton'>
          -
        </button>
      <div className='count'>
        {count}
      </div>
      <button onClick={increaseHandler} className='pbutton'>
        +
      </button>
      </div>
      <button onClick={resetHandler} className='reset-button'>
        reset
      </button> 
    </div>
  );
}

export default App;
