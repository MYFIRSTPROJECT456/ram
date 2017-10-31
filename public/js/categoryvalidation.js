	var cname = document.forms['formname']['cname'];
	var pid = document.forms['formname']['pid'];
	var error = document.getElementById('error');
	var error1 = document.getElementById('error1');

	cname.addEventListener('blur', removeerror, true);
	pid.addEventListener('blur', removeerror1, true);

	function removeerror(){
		if (cname.value != '') {
			error.innerHTML = '';
			return true;
		}
	}function removeerror1(){
		if (pid.value != '') {
			error1.innerHTML = '';
			return true;
		}
	}

	function validation(){
		var successflag = true;
		if (cname.value == '') {
			error.textContent = 'Please enter your categoryname?';
			successflag = false;
		}if (pid.value == '0') {
			error1.textContent = 'Please select your ParentCatName?';
			successflag = false;
		}
		return successflag;
	}