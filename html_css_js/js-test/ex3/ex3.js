/*Add the JavaScript here for the function billingFunction().
It is responsible for setting and clearing the fields in Billing Information */

// function billingFunction() {
// 	var name = document.getElementById("shippingName").value;
// 	var code = document.getElementById("shippingZip").value;
// 	let checkbox = document.getElementById("same");
// 	if (checkbox.checked) {
// 		document.getElementById("billingName").value = name;
// 		document.getElementById("billingZip").value = code;
// 	}
// 	else {
// 		document.getElementById("billingName").value = "";
// 		document.getElementById("billingZip").value = "";
// 	}
// }

//! mentoring session
function billingFunction() {
	let check = document.getElementById("same")
	// document.querySelectorAll("#same")
	if (check.checked) {
		let Sname = document.getElementById("shippingName").value
		let Szip = document.getElementById("shippingZip").value
		document.getElementById("billingName").value = `${Sname}`
		document.getElementById("billingZip").value = `${Szip}`
	} else {
		document.getElementById("billingName").value = "";
		document.getElementById("billingZip").value = "";
	}
}
