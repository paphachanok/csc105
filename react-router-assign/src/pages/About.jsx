import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/About.css'

function About() {
	const navigate = useNavigate()
	const handleRedirect = () => { navigate("/") }
  return (
	<div>
		<h1>This is About page</h1>
		<button className='redirect' onClick={handleRedirect} >Redirect</button>
	</div>
  )
}

export default About

