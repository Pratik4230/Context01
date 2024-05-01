import React, { useState , useContext } from 'react'
import UserContext from '../context/UserContext'

const LogIn = () => {

    const [username, setUserName] = useState('')
    const [password , setPassword] = useState('')

    const {user ,setUser} = useContext(UserContext);
     const handleSubmit = (e) => {
          e.preventDefault();
          setUser({username , password})
     }

  return (
    <div>
        <h2>LogIn</h2>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='username'
         />

         {" "}

         <input
         type="password"
         value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn