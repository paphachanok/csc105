import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
	<div >
		<h1 className="task">Tasks</h1>
		<nav>
			{/* Incoming */}
			<NavLink replace to="/todo" className="inactive-ink">
				{({isActive}) =>
					isActive ? (
						<li className="active-link">Incoming</li>
					) : (
						<li>Incoming</li>
					)
				}
			</NavLink>

			{/* Today */}
			<NavLink replace to="/today" className="inactive-ink">
				{({isActive}) =>
					isActive ? <li className="active-link">Today</li> : <li>Incoming</li>
				}
			</NavLink>

			{/* Calendar */}
			<NavLink replace to="/calendar" className="inactive-ink">
				{({isActive}) =>
					isActive ? (
						<li className="active-link">Calendar</li>
					) : (
						<li>Calendar</li>
					)
				}
			</NavLink>

		</nav>
	</div>
  )
}

export default Navbar
