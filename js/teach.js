'use strict';
// global var
const form = document.getElementById('form');
const quizDiv = document.getElementById('preview');
const removeDiv = document.getElementById('remove');
let studentNameArr = [];
let objArr = [];
form.addEventListener('submit',whenSubmit);
const resetStudentArr = document.getElementById('reset');
resetStudentArr.addEventListener('click',whenClick);
removeDiv.addEventListener('click',whenRemove);

function whenSubmit(event){
  event.preventDefault();
  let studentsName = event.target.std.value;
  studentNameArr.push(studentsName.split(',').map(x => x));
  let question = event.target.qus.value;
  let answer = event.target.ans.value;
  answer = answer.toLowerCase();
  new Quiz(question,answer);
  render();
  set();
  setStudentName();
}

function whenClick(event){
  event.preventDefault();
  studentNameArr = [];
  set();
  setStudentName();
}

function set(){
  let str = JSON.stringify(objArr);
  localStorage.setItem('question',str);
}

function setStudentName(){
  localStorage.setItem('name',studentNameArr);
}

function Quiz(question,answer){
  this.question = question;
  this.answer = answer;
  objArr.push(this);
}
function whenRemove(event){
  var idNum = event.target.id;
  objArr.splice(idNum,1);
  render();
  set();
}

function render ( ){
  quizDiv.innerHTML = '';
  removeDiv.innerHTML = '';
  let orderElement = document.createElement('ol');
  let unorderElement = document.createElement('ul');
  let head2 = document.createElement('h2');
  head2.textContent = 'Perview Questions';
  quizDiv.appendChild(head2);
  removeDiv.appendChild(unorderElement);
  quizDiv.appendChild(orderElement);
  for (let i=0;i<objArr.length;i++){
    let listElement = document.createElement('li');
    orderElement.appendChild(listElement);
    let liElement = document.createElement('li');
    unorderElement.appendChild(liElement);
    liElement.textContent = 'X';
    liElement.setAttribute('id',i);
    listElement.textContent = objArr[i].question;}
}

// function submitForm() {
//   var frm = document.getElementsByName('form-q')[0];
//   frm.submit();
//   frm.reset();
//   return false;
// }

function get(){
  var memoryArr = localStorage.getItem('question');
  var nameArr = localStorage.getItem('name');
  if (memoryArr){
    objArr = JSON.parse(memoryArr);
    render();
  }
  if (nameArr){
    studentNameArr = nameArr.split(',').map(x => x);
  }
}
get();
