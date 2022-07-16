import React, {useReducer} from 'react';
import './Red.css'


const intialState=0;
const reducer = (state, action) => {
  switch (action)
  {
    case "add":
    return state+1;

    case "sub":
      return state-1;

    case "reset":
      return 0;
    
      default:
        throw new Error("Unexpected action");
  }
}


const Reducer = () => {
   // Initialising useReducer hook
  const [count, dispatch]= useReducer (reducer, intialState);
  
  return (
    <div className='container'>
    <h1>This is React useReducer Hook</h1>
    <h2>{count}</h2>
    <div className='container1'>
    <button className='btnInc' onClick={()=> dispatch("add")}>Add</button>
    <button className='btnDec' onClick={()=> dispatch("sub")}>Subtract</button>
    <button className='btnReset'onClick={()=> dispatch("reset")}>Reset</button>
    </div>
    </div>
  )
}

export default Reducer