import React, {useState} from "react";




function App() {
  const [state, setState]=useState({count:0, theme:"Blue"})
  const count=state.count
  const theme=state.theme

  function IncrementFuct() {
    setState(prevState=>{
      return {...prevState, count:prevState.count+1}
    })
  }
    function decrementFuct(){
      setState(prevState=>{
        return {...prevState, count:prevState.count-1}
      })
      }
  return (
    <>
      <button onClick={IncrementFuct}> + </button>
      <span>{count}</span>
      <span>{theme}</span>

      <button onClick={decrementFuct}> - </button>
    </>

  );
}

export default App;
