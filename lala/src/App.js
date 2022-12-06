import logo from './logo.svg';
import './App.css';
import {useState} from "react";
let a;
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="vudi">
    <button onClick={()=>{
      if(a!=10){a = number + 1
      setNumber(a)}
      else setNumber(10);
    }}><p>+</p></button>
    <p>{number}</p>
    <button onClick={()=>{
      if(a!= -10){a = number -1 
      setNumber(a)}
      else setNumber(-10);
    }}><p>-</p></button>
    </div>
  );
}

export default App;
