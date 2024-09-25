function getFormvalue() {
    //Write your code here
	const form =document.getElementById("form1");

	const formData = new FormData(form);
	const firstName = formData.get('fname');
	const lastName = formData.get('lname');

	//alternate way

	// const firstName = form.elements['fname'].value;
	//const lastName = form.elements['lname'].value;
	

	alert(firstName + " " + lastName)

}
