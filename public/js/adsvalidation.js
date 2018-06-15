	var tit = document.forms['formname']['tit'];
		var tags = document.forms['formname']['tags'];
		var dis = document.forms['formname']['dis'];
		var img = document.forms['formname']['img'];
		var web = document.forms['formname']['web'];
		var c1name = document.forms['formname']['c1name'];
		var scat = document.forms['formname']['scat'];
		var sname = document.forms['formname']['sname'];
		var cityname = document.forms['formname']['cityname'];
		var lname = document.forms['formname']['lname'];
		var area = document.forms['formname']['area'];
		//var status = document.forms['formname']['status'];
		var e = document.getElementById('status');
		var error = document.getElementById('error');
		var error11 = document.getElementById('error11');

		tit.addEventListener('blur', removeerror, true);
		tags.addEventListener('blur', removeerror1, true);
		dis.addEventListener('blur', removeerror2, true);
		img.addEventListener('blur', removeerror3, true);
		web.addEventListener('blur', removeerror4, true);
		c1name.addEventListener('blur', removeerror5, true);
		scat.addEventListener('blur', removeerror6, true);
		sname.addEventListener('blur', removeerror7, true);
		cityname.addEventListener('blur', removeerror8, true);
		lname.addEventListener('blur', removeerror9, true);
		area.addEventListener('blur', removeerror10, true);
		e.addEventListener('change', removeerror11, false);
		
		function removeerror(){
			if (tit.value != '') {
				error.innerHTML = '';
				return true;
			}
		}function removeerror1(){
			if (tags.value != '') {
				error1.innerHTML = '';
				return true;
			}
		}function removeerror2(){
			if (dis.value != '') {
				error2.innerHTML = '';
				return true;
			}
		}function removeerror3(){
			if (img.value != '') {
				error3.innerHTML = '';
				return true;
			}
		}function removeerror4(){
			if (web.value != '') {
				error4.innerHTML = '';
				return true;
			}
		}function removeerror5(){
			if (c1name.value != '') {
				error5.innerHTML = '';
				return true;
			}
		}function removeerror6(){
			if (scat.value != '') {
				error6.innerHTML = '';
				return true;
			}
		}function removeerror7(){
			if (sname.value != '') {
				error7.innerHTML = '';
				return true;
			}
		}function removeerror8(){
			if (cityname.value != '') {
				error8.innerHTML = '';
				return true;
			}
		}function removeerror9(){
			if (lname.value != '') {
				error9.innerHTML = '';
				return true;
			}
		}function removeerror10(){
			if (area.value != '') {
				error10.innerHTML = '';
				return true;
			}
		}function removeerror11(){
			var e = document.getElementById('status');
			var status = e.options[e.selectedIndex];
			if (status.value != '') {
				error11.innerHTML = '';
				return true;
			}
		}

		function validation(){
			
			successflag = true;
			if (tit.value == '') {
				error.textContent = 'Please enter your tittle?';
				successflag = false;

			}if (tags.value == '') {
				error1.textContent = 'Please enter your tags?';
				successflag = false;

			}if (dis.value == '') {
				error2.textContent = 'Please enter your Discription?';
				successflag = false;

			}if (img.value == '') {
				error3.textContent = 'Please choose your image?';
				successflag = false;

			}if (web.value == '') {
				error4.textContent = 'Please enter your Website?';
				successflag = false;

			}if (c1name.value == '') {
				error5.textContent = 'Please select your category?';
				successflag = false;

			}if (scat.value == '') {
				error6.textContent = 'Please select your sub-category?';
				successflag = false;

			}if (sname.value == '') {
				error7.textContent = 'Please select your state?';
				successflag = false;

			}if (cityname.value == '') {
				error8.textContent = 'Please select your city?';
				successflag = false;

			}if (lname.value == '') {
				error9.textContent = 'Please select your locality?';
				successflag = false;
				
			}if (area.value == '') {
				error10.textContent = 'Please enter your area?';
				successflag = false;
			}
			var e = document.getElementById('status');
			var status = e.options[e.selectedIndex];
			if (status.value == '') {
				error11.textContent = 'Please select your status?';
				successflag = false;
			}
			return successflag;
		}