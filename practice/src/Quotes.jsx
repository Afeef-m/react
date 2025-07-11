import React from 'react'
import { useState, useEffect } from 'react'

function Quotes() {
    let [quotes, setQuotes]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then((pass)=>pass.json())
        .then((data)=>{
            setQuotes(data.quotes)
        })
        .catch((error)=>console.error(error))
},[])
  return (
    <div>
      <h2>List the 10 Quotes</h2>
      {quotes.slice(10,20).map((quot)=>(
        <h3 key={quot.id}>
            {quot.quote} - {quot.author}</h3>
      ))}
    </div>
  )
}
export default Quotes
