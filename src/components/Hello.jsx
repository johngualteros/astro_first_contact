import { useState } from "react";
function Hello() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
    <div>
        <h1>Hello</h1>
        <button onClick={()=>handleCount()}>Click me {count}</button>
    </div>
  )
}

export default Hello