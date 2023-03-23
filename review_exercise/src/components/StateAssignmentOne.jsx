import { useState } from "react";

function StateAssignmentOne() {
	const [count, setNumber] = useState(0);

	function handleClick() {
		setNumber(count + 1)
	}

	return (
	<div>
		<section>
			<button onClick={handleClick}> {count} </button>
		</section>
	</div>
	)
}

export default StateAssignmentOne
