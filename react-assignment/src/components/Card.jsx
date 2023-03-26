import React from 'react'
import '../styles/Card.css'

function Card({user}) {
  return (
	<div className="card-container" >
			<p>Name: {user.name} </p>
			<p>Job: {user.job} </p>
			<p>Hobby: {user.hobby} </p>
	</div>
  )
}

export default Card
