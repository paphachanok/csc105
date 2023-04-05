import React from 'react'
import { Navigate } from 'react-router-dom';
import '../styles/Admin.css'

function Admin({userLogin, setUserLogin}) {
	const hanndleLogout = () => setUserLogin(false)

	if (!userLogin) {
		return <Navigate to="/" replace />;
	}
  return (
	<div>
		<img src="src/assets/Tong.jpg" alt="Tong's Picture" />
		<h1>This is Admin Page</h1>
		<button className='logout' onClick={hanndleLogout} >Logout</button>
	</div>
  )
}

export default Admin
