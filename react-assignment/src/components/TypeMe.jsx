import React from 'react'

function Typeme({handleFocus}) {
  return (
	<div onBlur={handleFocus}>
		<input type="text" onBlur={handleFocus} ></input>
		<p id="blur" style={{color: "red"}} ></p>
	</div>
  )
}

export default Typeme
