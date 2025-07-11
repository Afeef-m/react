import React from "react";
import { useState } from "react";

function Counter(){
    let [count, setCount]=useState(0)
    let textcolor=count %2==0 ?'even':'odd'

    return (
        <div>
        <h3 className='text'>Count <span className={textcolor}>{count}</span></h3>
        <button onClick={()=>setCount(count= 0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default Counter;