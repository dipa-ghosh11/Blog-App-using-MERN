import React from 'react'
import './App.css'

const LoginPage = () => {
  return (
    <form className="login">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Log in</button>
     </form>
  )
}

export default LoginPage