
import React, { useState } from "react";

const App = () => {
  const [count,setcount]=useState(10)

  const inc=()=>{
    setcount(count+1);
  }
return(
  <div>
  <h1>{count}</h1>
  <button onClick={inc}>click me</button>
  </div>
)
};

export default App;
