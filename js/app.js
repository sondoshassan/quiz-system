'use strict';
// global var
var form = document.getElementById('submit');
form.addEventListener('submit',whenSubmit);
let studentNameArr = [];
function whenSubmit(event){
  event.preventDefault();
  let userName = event.target.name.value;
  let passWord = event.target.pass.value;
  console.log(passWord);
  console.log('the name of st ',studentNameArr);
  if (studentNameArr.includes(userName) && passWord === `${userName} 2020`) {
    window.location.href = 'student.html';
  }
  else if (passWord === '123456789' && userName === 'teacher'){
    window.location.href = 'teacher.html';
  }
  else{ alert('Please check your passcode and try again');
  }
}

function get(){
  if(studentNameArr !== []){
    studentNameArr = (localStorage.getItem('name').split(','));
  }
}
get();




