		var uname = document.forms['formname']['sname'];
		var error = document.getElementById('error');

		uname.addEventListener('blur', removeerror, true);

	function removeerror(){
		if (uname.value != '') {
			error.innerHTML = '';
			return true;
		}
	}	

	function validation(){

	if (uname.value == '') {
			error.textContent = 'Please enter your state?';
		return false;
	}
	}