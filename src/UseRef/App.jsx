import { useState } from "react";
import Content from "./Content";


function App() {
    const [show, setShow] = useState(false)
    return (
      <div className="App" style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content/>}
      </div>
    )
  }

  //memo
  /*count tăng dần thì memo kiểm tra trước khi render và sau khi render có 
giá trị khác nhau ---> re-reender component update giá trị mới ra UI*/
  




export default App