   var uname = document.forms['formname']['uname'];
   var email = document.getElementById('email');
   var mob = document.forms['formname']['mob'];
   var upass = document.forms['formname']['upass'];
      uname.addEventListener('blur', removeerror, true);
      email.addEventListener('blur', removeerror1, true);
      mob.addEventListener('blur', removeerror2, true);
      upass.addEventListener('blur', removeerror3, true);

      function removeerror(){
         if (uname.value != '') {
            error.innerHTML = '';
            return true;
         }
      }
      function removeerror1(){
         if (email.value != '') {
            error1.innerHTML = '';
            return true;
         }  
      
      }

      function removeerror2(){
         if (mob.value != '') {
            error2.innerHTML = '';
            return true;
         }
      }
      function removeerror3(){
         if (upass.value != '') {
            error3.innerHTML = '';
            return true;
         }  
      
      }
      function validation(){
         successflag = true;
         if (uname.value == '') {
            error.textContent='Please enter your user name?';
            uname.focus();
            successflag = false;
         }

         if (email.value == '') {
            error1.textContent='Please enter your email?';
            email.focus();
            successflag = false;
         }
         if (mob.value == '') {
            error2.textContent='Please enter your mobile no?';
            mob.focus();
            successflag = false;
         }

         if (upass.value == '') {
            error3.textContent='Please enter password?';
            upass.focus();
            successflag = false;
         }
         return successflag;
         
      }