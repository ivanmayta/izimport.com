"use client"
import { useState } from "react"

const SearchTrackingInput = () => {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    setTrackingNumber(event.target[0].value)
  }

  return (
    
    <>
      <h1>{trackingNumber}</h1>

      <form onSubmit={handleSubmit}>
        <input className="text-black" />
        <button>Click</button>
      </form>
    </>
  )
}

export default SearchTrackingInput
