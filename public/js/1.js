		var uname = document.forms['formname']['uname'];
		//alert('jkjlasd');
		var mob = document.forms['formname']['mob'];
		var email = document.forms['formname']['email'];
		var e = document.getElementById('status');
		var strUser = e.options[e.selectedIndex];
		var upass = document.forms['formname']['upass'];
		var error = document.getElementById('error');
		var error1 = document.getElementById('error1');
		var error2 = document.getElementById('error2');
		var error3 = document.getElementById('error3');
		var error4 = document.getElementById('error4');
 
		uname.addEventListener('blur', removeerror, true);
		mob.addEventListener('blur', removeerror1, true);
		email.addEventListener('blur', removeerror2, true);
		e.addEventListener('change', removeerror3, true);
		upass.addEventListener('blur', removeerror4, true);

		function removeerror(){
			if (uname.value != '') {
				error.innerHTML = '';
				return true;
			}
		}
		function removeerror1(){
			if (mob.value != '') {
				error1.innerHTML = '';
				return true;
			}
		}function removeerror2(){
			if (email.value != '') {
				error2.innerHTML = '';
				return true;
			}
		}function removeerror3(){
			
			var e = document.getElementById('status');
			var strUser = e.options[e.selectedIndex];
			if (strUser.value != '') {
				error3.innerHTML = '';
				return true;
			}
		}function removeerror4(){
			if (upass.value != '') {
				error4.innerHTML = '';
				return true;
			}
		}

		function validation(){
			var successflag = true;
			if (uname.value == '') {
				error.textContent = 'Please enter your username?';
				successflag = false;
			}
			if (mob.value == '') {
				error1.textContent = 'Please enter your mobile no.?';
				successflag = false;
			}
			if (email.value == '') {
				error2.textContent = 'Please enter your email address?';
				successflag = false;
			}
			
			var e = document.getElementById('status');
			var strUser = e.options[e.selectedIndex];
			if (strUser.value == '') {
				error3.textContent = 'Please select your status?';
				successflag = false;
			}
			
			if (upass.value == '') {
				error4.textContent = 'Please enter your password';
				successflag = false;
			}
			 return successflag;
		}