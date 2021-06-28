import React, {useState} from 'react'

export default function UseState() {
  const [name, setName] = useState("monika")
  return (
    <div>
      <h1>Employees Details</h1>
      <h1>Your name:{name}</h1>
    </div>
  )
}
