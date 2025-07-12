import { useState } from "react";



  // UseState Increase

function App() {
  const [count, setCount] = useState(0)
  const handleCount = () => { 
    // setCount(count+1)  // cach1
    setCount(prevState => prevState + 2)  // Cach2
  }
  //console.log('render');

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}


/*  // UseState Array

const orders = [100, 200, 300]

function App() {
  const [count, setCount] = useState(() => {
    const total = orders.reduce((total, index) => total + index)
    console.log(total)
    console.log('render1');
    return total
  })
  const handleCount = () => { 
    setCount(count + 1)
    console.log('render2');
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}
*/

/*  // UseState Random Array
const gifts = [
  'CPU i7 i9',
  'RAM 32GB',
  'RAM 1TB',
  'GRB keyboard',
  'CPU i3 i5',
  'Iphone 17 18'
]
function App() {
  const [gift , setGift] = useState(() => {
    
  })
  const randomGift = () => { 
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }
  return (
    <div className="App" style={{padding: 30}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>NHẬN</button>
    </div>
  );
}
*/

/*  //Practic two-binding

const courses = [
  {
    id: 1,
    Name: 'React-hooks'
  },
  {
    id: 2,
    Name: 'React-webpack'
  },
  {
    id: 3,
    Name: 'create-react-app'
  }
]
*/

  /*      // Return Radio
  function App() {
    const [checked, setChecked] = useState()
    console.log({id: checked})
    return (
      <div className="App" style={{padding: 50}}>
          <h1>RADIO</h1>
          {courses.map(course => (
            <div key={course.id}>
              <input 
                type="radio" //name="course"
                checked={checked === course.id}                
                onChange={() => setChecked(course.id)}
              />
                {course.Name}
            </div>
          ))}      
      </div>
    )
  }
  */

      /*  // Return Checkbox
  function App() {
    const [checked, setChecked] = useState()
    const handleCheck = (id) => {
      setChecked([id])
    }
    const handleSubmit = () => {
      console.log({id: checked})
    }
    return (
      <div className="App" style={{padding: 50}}>
          <h1>CHECKBOX</h1>
          {courses.map(course => (
            <div key={course.id}>
              <input 
                type="checkbox" //name="course"
                checked={checked === course.id}                
                onChange={() => handleCheck(course.id)}
              />
                {course.Name}
            </div>
          ))}    
          <button onClick={handleSubmit}>Register</button> 
      </div>
    );
  }
  */

  /*  // One - Two way binding

  function App() {
    //One-way binding
  const [name, setName] = useState('')
    //Two-way binding
  const [email, setEmail] = useState('')
  
  const handleSubmit = () => {
    console.log({name,email})
  }
  
    return (
      <div className="App" style={{padding: 30}}>
        
        <h1>Nhập Name hoặc Email </h1>
        <input
          value={name}
          placeholder="User"
          onChange={(e) => setName(e.target.value)} 
        />
        <button onClick={() => setName('Nguyễn Văn Nam')}> Change </button>
        
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={handleSubmit}> Submit </button>
      </div>
    );
  }

*/

export default App;