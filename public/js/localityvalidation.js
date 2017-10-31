		var cname = document.forms['formname']['cname'];
		var lname = document.forms['formname']['lname'];
		var error = document.getElementById('error');
		var error1 = document.getElementById('error1');

		cname.addEventListener('blur', removeerror, true);
		lname.addEventListener('blur', removeerror1, true);

		function removeerror(){
			if (cname.value != '') {
				error.innerHTML = '';
				return true;
			}
		}
		function removeerror1(){
			if (lname.value != '') {
				error1.innerHTML = '';
				return true;
			}
		}

		function validation(){
			successflag = true;
			if (cname.value == '') {
				error.textContent = 'Please select city?';
				successflag = false;
			}
			if (lname.value == '') {
				error1.textContent = 'Please enter locality?';
				successflag = false;
			}
			return successflag;
		}