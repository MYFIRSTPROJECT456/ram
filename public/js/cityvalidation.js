        var sname = document.forms['formname']['sname'];
        var cname = document.forms['formname']['cname'];
        var error = document.getElementById('error');
        var error1 = document.getElementById('error1');

        sname.addEventListener('blur', removeerror, true);
        cname.addEventListener('blur', removeerror1, true);

        function removeerror(){
            if (sname.value != '') {
                error.innerHTML = '';
                return true;
            }
        }

        function removeerror1(){
            if (cname.value != '') {
                error1.innerHTML = '';
                return true;
            }
        }

        function validation(){
            successflag = true;
            if (sname.value == '') {
                error.textContent = 'Please select your state?';
                successflag = false;
            }
            if (cname.value == '') {
                error1.textContent = 'Please enter your city?';
                successflag = false;
            }
            return successflag;
        }