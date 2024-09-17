import React,{useState} from "react";

const App =()=>{
const[count,IncDecCount]=useState(0);

const Inc=()=>{
  IncDecCount(count+1);
};
const Dec=()=>{
  IncDecCount(count-1);
};
//changes
return(
  <>
    <h1>{count}</h1>
    <button onClick={Inc}>Click Increment</button>
    <button onClick={Dec}>Click Decrement</button>
  </>
)
}
export default App;
