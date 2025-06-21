import React from 'react'
import { useState } from 'react';

function HooksCount() {
    let initialCount=0;
    let [count,setcount]=useState( initialCount)
  return (
    <div>
      Count: {count}<br></br>
      <button onClick={() => setcount(initialCount)}>Reset</button>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  )
}

export default HooksCount
