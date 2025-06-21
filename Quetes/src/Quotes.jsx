import React from 'react'
import { useState, useEffect } from 'react'

function Quotes() {
  let [quotes,setQuotes]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then((response)=>response.json())
    .then((data)=>{
      setQuotes(data.quotes)
    })
    .catch((error)=>console.error('Error this fetch',error))
  },[])
  return (
    <div>
      <h1>Top 10 quotes</h1>
      {quotes.slice(0,10).map((quote)=>(
        <h2>{quote.quote}-{quote.author}</h2>
      ))}
    </div>
  )
}

export default Quotes

