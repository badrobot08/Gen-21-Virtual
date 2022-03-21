import React,{useState} from "react";




function FunctionalState() {

    //this is a hook. a state for functional components.
const [number,setNumber] = useState(0)


  return (
    <>
    functional component
      <h1>the count is: {number}</h1>
      <br />
      <button onClick={(e)=>{setNumber(number+1)}}>Increase</button>
      <button onClick={(e)=>{setNumber(number-1)}}> Decrease</button>
    </>
  );
}

export default FunctionalState;
