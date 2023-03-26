import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import TypeMe from './components/TypeMe'
import MyForm from './components/MyForm';

const users = 	[
					{name: "Tom", job:"teacher", hobby:"cooking"},
					{name: "Timmy", job:"student", hobby:"drawing"},
					{name: "Tames", job:"seller", hobby:"planting"},
					{name: "John", job:"Programmer", hobby:"running"},
					{name: "Joey", job:"Singer", hobby:"playing guitar"}
				]


function App() {
	const [count, setCount] = useState(0)

	function handleFocus() {
		document.getElementById("blur").innerHTML = "Please type in here!"
	}

	return (
		<div className="App">
			<List users={users}/>
			<TypeMe handleFocus={handleFocus} />
			<MyForm />
		</div>
	)
}

export default App
