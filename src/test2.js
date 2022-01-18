import React, { useState, useEffect, memo } from "react"

export default memo(function Test2(props) {
  const [hello, setHello] = useState("jdfadsfkjskkadsjfkl")
  return (
    <div>
      <input type="text" placeholder="" />
      <h1>{hello}</h1>
    </div>
  )
})
