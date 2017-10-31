var email = document.forms['formname']['email'];
		var error = document.getElementById('error');

		email.addEventListener('blur', removeerror, true);

		function removeerror(){
			if (email.value != '') {
				error.innerHTML = '';
				return true;
			}
		}

		function validation(){
			if (email.value == '') {
				error.textContent='please enter your email address?';
				email.focus();
				return false;
			}
			alert('form submitted');
		}