// const createBtn = document.getElementById('butt');		// find button by using id
// const ulElement= document.getElementById('ul');		// find root element first by using id
// function ft_add() {
// 	// let promptButt = prompt("What is your favorite fruit?", "hehe");
// 	let butt = window.prompt('Add fruit')  // add prompt
// 	let liElement = document.createElement('li');	// create li | not yet a chile of anyone
// 	liElement.textContent = butt.valueOf();		// put value in
// 	ulElement.appendChild(liElement)	// make li to be a chile of ul
// }
// createBtn.addEventListener('click', ft_add)		// click -> call function ft_add


//! mentoring session
var fruit = ["banana", "apple", "monkey"]

function loadFruit() {
	var listFruit = document.getElementById("fruits") = ""
	for (let i = 0; i < fruit.length; i++) {
		listFruit += "<li>" + fruits[index] + "</li>"
	}
	document.getElementById("fruits").innerHTML = listFruit;
}

function myFunction() {
	var fruit = prompt("what is your favorite fruit? ")
	if (fruit.length == 0) {
		return ;
	} else {
		fruit.push(fruit) // add element in fruit array
		loadFruit()
	}

}
