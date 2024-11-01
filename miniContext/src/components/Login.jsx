import React from 'react'
import UserContext from '../context/UserContext'
import { useState  } from 'react'
import { useContext } from 'react'

function Login() {
  // dekho sabse pehle humne do data / state li hai jaise ki username and password 
  // first of all hum do input box lenge aur unme on change evnet fire karenge jiski madad se setUsername
  // and setPassword humare username and password ki value ko update karenge
  // now setUser wala method import karenge usme hum humara Usercontext de denge kyuki humne yeh crete kara tha
  // humari user ki state manage karne ke liye
  // onlcick karte hi handlesubmit call hoga aur uske andar hum sabse pehle e.prevent default karnege kyuki 
  //onclick koi url ya post method ke through value khi na khi chali jaati hai 
  // isme ab hum humare context api ka method call karnege jo humne user context provider mein banaya tha 
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  // yeh setuser Usercontext provider se aaya hai waha par 
  // humne waha props ke through do do value pass kri hai na 
  // uske through hume setUser method milta hai ji use ko update karega
  const {setUser} = useContext(UserContext)

  const handleSumbmit = (e)=> {
    e.preventDefault()
    setUser({username , password})
  }
  return (
    <div>
      <h2 >login</h2>
      <input 
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      
      />
      <input 
        type="text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        onClick={handleSumbmit}
      >
        Submit
      </button>
    </div>
  )
}

export default Login
