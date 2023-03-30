// function ft_check() {
// 	var input = document.getElementById("some_text").value;
// 	if (input.charAt(0) === input.charAt(0).toUpperCase()) {
// 		console.log("String's first character is uppercase");
// 	} else {
// 		console.log("String's first character is not uppercase.");
// 	}
// }


//! mentoring session
function ft_check() {
	let pattern = "[A-Z]+\w+" // ^ means starting
	// let username = document.getElementById("some_text") // get only input tag !!!not value
	let username = document.getElementById("name").value // get value from form
	if (pattern.test(username)) {
		console.log("String's first character is uppercase")
	} else {
		console.log("String's first character is not uppercase.")
	}
}
