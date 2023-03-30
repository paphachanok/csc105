import { useState } from 'react'

function StateAssignmentTwo() {
	const [numbers, setNumber] = useState([]);


	return (
	<div>
		<section>
			<button onClick={()=> {
				const result = Math.floor(Math.random() * 10);
					setNumber([...numbers, result])
				}}>
				Click me!
			</button>
			<ul>
				{
					numbers.map((e, index)=>{
						return <li key={index}> {e} </li>
					})
				}
			</ul>
		</section>
	</div>
	)
}

export default StateAssignmentTwo
