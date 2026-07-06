import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}=useContext(UserContext) //from app.jsx

    const handleSubmit = (e) => {
       e.preventDefault()
       setUser({username,password})
    }

    return (
        <>
            <div>
                <h2>Login</h2>
                <input value={username} type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='username'></input>
                {'   '}
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Login
