import { useState } from "react";
// it is best to name function in uppercase
//use PascalCase format in react 
function Counter() {
  let [counter , setCounter] = useState(10)
  
  const addValue = () =>{
    if(counter < 20) {
      setCounter(counter + 1)
    }
  }  
  const removeValue = () => {
    if( counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Apeksh Aur React</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue}>increase counter : {counter}</button>
      <button onClick={removeValue}>decrease counter : {counter}</button>
    </>
  )
}

export default Counter