	var username = document.forms['formname']['username'];
	var emailid = document.forms['formname']['emailid'];
	var mobileno = document.forms['formname']['mobileno'];
	var message = document.forms['formname']['message'];
 	
	var error = document.getElementById('error');
	var error1 = document.getElementById('error1');
	var error2 = document.getElementById('error2');
	var error3 = document.getElementById('error3');
	
		username.addEventListener('blur', removeerror, true);
		emailid.addEventListener('blur', removeerror1, true);
		mobileno.addEventListener('blur', removeerror2, true);
		message.addEventListener('blur', removeerror3, true);

		function removeerror(){
			if (username.value != '') {
				error.innerHTML = '';
				return true;
			}
		}
		function removeerror1(){
         console.log('her'+validEmail.test(emailid.value));
         if (emailid.value != '' && validEmail.test(emailid.value) === true) {
            error1.innerHTML = '';
            return true;
         }  
      
      }function removeerror2(){
			if (mobileno.value != '') {
				error2.innerHTML = '';
				return true;
			}	
		
		}function removeerror3(){
			if (message.value != '') {
				error3.innerHTML = '';
				return true;
			}	
		
		}
		function validation(){
			successflag = true;
			if (username.value == '') {
				error.textContent='Please enter your username?';
				username.focus();
				successflag = false;
			}

			if (emailid.value == '') {
				error1.textContent='Please enter your email address?';
				emailid.focus();
				successflag = false;
			}if (mobileno.value == '') {
				error2.textContent='Please enter your mobile number?';
				mobileno.focus();
				successflag = false;
			}if (message.value == '') {
				error3.textContent='Please enter your message?';
				mobileno.focus();
				successflag = false;
			}
			return successflag;
			
		}