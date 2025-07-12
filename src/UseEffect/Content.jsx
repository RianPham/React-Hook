import { useState, useEffect } from "react";

/*  // 1. UseEffect(callback)
    // ----> callback được gọi sau khi component (re-render) và mounted

function Content() {

  const [title, setTitle] = useState('')
  useEffect(() => {
    console.log('Mounted', title)
    document.title = title
  })

  return(
    <div className="Content">
      <h1>Hey You, Goodnight</h1>
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>

  )
}
*/

/*  // UseEffect --> Call API
    // (thay vi gọi ra vô số post ---> sử dụng useEffect để khac phục)
function Content() {

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( res => res.json() )
    .then( posts => {setPosts(posts); })
    document.title = title
  })

  return(
    <div className="Content">
      <h1>Call API</h1>
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
*/

/*  // 2. UseEffect(callback,[])
    // Callback chỉ được gọi 1 lần sau khi component mounted 
    // (chỉ gọi 1 post duy nhất)
function Content() {

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( res => res.json() )
    .then( posts => {setPosts(posts); })
    //console.log("Mounted ", title); --- > chi goi Mounted 1 lan
    document.title = title
  }, [])

  return(
    <div className="Content">
      <h1>Call API</h1>
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
*/

/*  //3.useEffect(callback, [deps])
      // ----> callback duoc goi khi deps thay doi
function Content() {
  const tabs = ['posts', 'comments', 'albums']

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  console.log(type)

  useEffect(() => {
    console.log('TitleChange')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json() )
    .then( posts => {setPosts(posts); })
  }, [title])

  return(
    <div className="Content">
      <h1>Call API</h1>

      {tabs.map(tab => (
        <button key={tab}
          style={type === tab ? {color: 'white', backgroundColor: "black"} : 
          {backgroundColor: "white", color: 'black'}}
          onClick={() => (setType(tab))}
          >
            {tab}
        </button>
      ))}

      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
     
      <ul>
        {posts.map(post => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  )
}
*/

  
const tabs = ['posts', 'todos', 'albums']
function Content() {

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)

  console.log(type);
  
  useEffect(() => {

    console.log('type change');

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {setPosts(posts)})
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 100)
    }
    window.addEventListener('scroll', handleScroll)

    //clearup 

  }, [])

  return(
    <div className="Content">
      <h1>Call API</h1>

    {tabs.map(tab => (
      <button 
        key={tab}
        style={ type === tab ? {color: "white", backgroundColor: 'black'} : {} }
        onClick={() => setType(tab)}
      >
        {tab}
      </button>
    ))}

      <input 
        value = {title}
        onChange={e => setTitle(e.target.value)}
      />

    {posts.map(post => (
      <li key={post.id}>{post.title || post.name}</li>
    ))}

    {
      showGoToTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          Go To Top
        </button>
      )
    }
    </div>
  )
}





export default Content