import React, { useState, useEffect, memo } from "react"
import Test1 from './test1'
import Test2 from './test2'


function App(props) {
  const [welcome, setWelcome] = useState("hello world")
    console.log(MODE)
    console.log(BASE_URL)

  return (
    <div>
      <h2 className="text-red-800" >{welcome}</h2>
      <Test1/>
      <Test2/>
    </div>
  )
}

export default App
