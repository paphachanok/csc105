import React from 'react'
import { useState } from 'react'
import '../styles/Home.css'
import {NavLink} from "react-router-dom"

function Home({userLogin, setUserLogin}) {
	const handleLogin = () => setUserLogin(true)
	const handleLogout = () => setUserLogin(false)

  return (
	<>
		<h1>This is Home page</h1>
		{userLogin ? (
			<button className='login' onClick={handleLogout} >Logout</button>
		) : (
			<button className='login' onClick={handleLogin} >Login</button>
		)}
	</>
  )
}

export default Home
