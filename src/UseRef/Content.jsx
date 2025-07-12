import { useRef, useState, useEffect } from "react"



//useRef
function Content() {

  const [count, setCount] = useState(60)
  const timerId = useRef()
  const preCount = useRef()
    
  useEffect(() => {
    preCount.current = count
  }, [count])

//  console.log(ref.current)
      
  const handleStart = () => {
    timerId.current = setInterval(() => {
    //ref.current = Math.random()
      setCount(preCount => preCount - 1)
    }, 1000)
      
  console.log('Start ---> ', timerId.current)
  }
      
  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('Stop ---> ', timerId.current)
  }
      
  console.log(count, preCount.current)
      
  return(
    <div className="Content">
      <div style={{padding: 20}}>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>  
    </div>
  )
}

export default Content