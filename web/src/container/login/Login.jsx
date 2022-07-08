import React from 'react'
import axios from 'axios'

const Login = () => {
  const handleClick = () => {
    axios.get("http://localhost:8080/").then((res) => {
        console.log(res)
    })
  }
  return (
    <>
        <input type="text" />
        <input type="text" />
        <a href='http://localhost:8080/oauth2/authorization/google'>로그인</a>
    </>
  )
}
export default Login;
