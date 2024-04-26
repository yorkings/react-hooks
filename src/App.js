
import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount]=useState(0)
  function increment(){
      setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const Reset=()=>{
    setCount(0)
  }
  return (
    <>
    <div>
       <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>

    </div>
    <div>
    <button onClick={Reset}>reset</button>
    </div>
   
    </>
  );
}

export default App;
// hooks cant be used inside classes
//cant be used in conditional statement