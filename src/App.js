import React, { useState}from 'react';
import './App.css';

import LoginForm from './login-component/LoginForm'


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "123"
  }

  const [user, setUser] = useState({ email: "" ,password:""});
  const [error, setError] = useState("")


  const Login = details => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        email: details.email,
        password: details.password
      })
    } else {
      setError("invalid login details")
    }
  }

  return (
    <div className="APP">
      <LoginForm Login={Login} error={ error}/>
    </div>
  )
}

export default App;
