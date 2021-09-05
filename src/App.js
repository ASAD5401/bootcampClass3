import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Message } from './message'

function App() {
  let [count, setCount] = useState(0)
  let [morning,setIsMorning]=useState(true)
  // const increment=()=>{
  //   count=count+1
  //   setCount(count)

  // }
  return (
    <div className={`box ${morning ? 'dayLight':''}`}>
      <h1>Good {morning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setIsMorning(!morning)}>Change Mood</button>

    </div>
  );
}

export default App;
