import { useState } from "react";
import './App.css'
function Theme(){
  let [isDark,setDark]=useState(false)
  let toggle=()=>{
    setDark(!isDark)
  }
  return(
    <div className={isDark ?'dark':'light'}>
      <p>toggle theme</p>
      <button onClick={toggle}>Click me</button>
    </div>
    
  )
}
export default Theme;