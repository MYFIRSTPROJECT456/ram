

var sub = document.getElementById('sub');
var mul = document.getElementById('mul');
var div = document.getElementById('div');



function add(){
	var a, b, c;
	 
	a=Number(document.getElementById("enter").value);
    b=Number(document.getElementById("enter").value);
	c = a+b;
    //c = eval(a);
	document.getElementById('result').value = c;
}
sub.onclick = function(){
  var enter = document.getElementById('enter').value;
   //alert(enter);
   document.getElementById('display').innerText = enter;
}
mul.onclick = function(){
  var enter = document.getElementById('enter').value;
   //alert(enter);
   document.getElementById('display').innerText = enter;
}
div.onclick = function(){
  var enter = document.getElementById('enter').value;
   //alert(enter);
   document.getElementById('display').innerText = enter;
}
/*var student = new Array('deepak', 'ramesh',[45,87,258,64], 'Abhishek');

student[2] = 'sudhir';
document.write(student);*/
/*function stylechange(){
var names = document.querySelector('#first');

//names.innerHTML = "this is a div tag";

names.style.color = 'white';
names.style.backgroundColor = "green";
names.style.border = "1px solid black";
}

*/


/*document.getElementsByTagName('p')[0].innerHTML = "my name is deepak";*/

/*var dressColor = 'blue';
var vipPass = 'no';
var simplePass = 'yes';

if (dressColor=='blue') {

	if (vipPass=="yes") {
		document.write("you can site on the golden chairs");
	}
	else
	{
	if (simplePass=="yes") {
		document.write("you can site on the simple chairs");
	}
	else
	{
		document.write("you cann't attend the party");
	}
	}
}
else{
	document.write("you cann't attend the party");
}*/


/*var students = ['deepak', 'Ramesh,', 'sudhir',[11, 45,86,['chauhan', 'thakur', 'pandey'],89,75], 'Abhishek',['mohan', 'sohan','sandeep']];

console.log(students.length);
for (var i = 0; i < students.length; i++) 
{
	document.write(students[i]+'<br />');
	}

*/

/*var person = {
	name : 'deepak', 
	age  : 21,

	discription : function(){
		return "the person name is : "+this.name+" and age is: "+this.age;
	}
};
document.write(person.discription());*/
/*var names = ['deepak', 'ramesh', 'Abhishek'];
names.shift();
alert(names);*/

/*var person = {
	name : 'Deepak',
	age : 21,
	profeesion : 'Web Developer',

	discription : function(){
		document.write("the person name is : "+this.name+ " and his profeesion is : " +this.profeesion);
	}
}
person.discription();*/
/*var names = ["deepak", "ramesh", "Abhishek"];

confirm(names);*/



/*var add = 2+3+"7";

document.write(add);*/

/*var a ="151";
var b =151;

if (a===b) {
	document.write('is true');
}
else {
	document.write('is false');	
}*/

/*
var names = parseInt("40")
alert(names);*/


/*var names = ['Deepak', 'Abhishek', 'Ramesh'];

console.log(names.length);

for(var i = 0; i<names.length; i++)
{
	document.write(names[i]+'<br />');
}
*/

/*var deepak = 21;

do
{
	document.write('Step '+ deepak+"<br />");
	deepak++;
}while(deepak<11)*/



/*var deepak = 1;

while(deepak<11)
{

	document.write('person step ' + deepak+"<br />");
	deepak++;
}
*/

/*var submit = document.getElementById('submit');
var captilazation = document.getElementById('captilazation');
var clear = document.getElementById('clear');

submit.onclick = function(){

	var name = document.getElementById("name").value;
	var city = document.getElementById("city").value;

	document.getElementById('outputname').innerText = name;
	document.getElementById('outputcity').innerText	= city;

}

captilazation.onclick = function() {
	var name = document.getElementById("name").value;
	var city = document.getElementById("city").value;

	document.getElementById('name').value = name.toUpperCase();
	document.getElementById('city').value = city.toUpperCase();
}

clear.onclick = function (){

	document.getElementById("name").value = '';
	document.getElementById("city").value = '';

}*/