	var email = document.forms['formname']['email'];
	var error = document.getElementById('error');
	var pass = document.forms['formname']['pass'];
	var error1 = document.getElementById('error1');
		email.addEventListener('blur', removeerror, true);
		pass.addEventListener('blur', removeerror1, true);

		function removeerror(){
			if (email.value != '') {
				error.innerHTML = '';
				return true;
			}
		}
		function removeerror1(){
			if (pass.value != '') {
				error1.innerHTML = '';
				return true;
			}	
		
		}
		function validation(){
			successflag = true;
			if (email.value == '') {
				error.textContent='Please enter your email address?';
				email.focus();
				successflag = false;
			}

			if (pass.value == '') {
				error1.textContent='Please enter your password?';
				pass.focus();
				successflag = false;
			}
			return successflag;
			
		}