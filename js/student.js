'use strict';
let objArr;
let ansArr ;
let score = 0;
const formQuiz = document.getElementById('quiz');
formQuiz.addEventListener('submit',whenChoose);
function get(){
  let memoryArr = localStorage.getItem('question');
  if (memoryArr){
    objArr = JSON.parse(memoryArr);
    render();
  }
}

function render(){
  for (let i=0;i<objArr.length;i++){
    createPargraph(i);
    answer('yes',i);
    answer('no',i);
  }
  let button = document.createElement('button');
  button.textContent = 'SUBMIT';
  formQuiz.appendChild(button);
}



function answer(ans,name) {
  let answer = document.createElement('input');
  answer.setAttribute('type', 'radio');
  answer.setAttribute('id', `name${name}`);
  answer.setAttribute('value', ans);
  answer.setAttribute('name',name);
  formQuiz.appendChild(answer);
  let labelElement = document.createElement('label');
  labelElement.textContent = ans;
  formQuiz.appendChild(labelElement);
}

function createPargraph(i) {
  let paragraphElement = document.createElement('p');
  paragraphElement.textContent = `${i+1}- ${objArr[i].question}`;
  formQuiz.appendChild(paragraphElement);
}

function whenChoose(event){
  for(let i=0;i<objArr.length;i++){
    ansArr= event.target;
    console.log(ansArr);
    if (objArr[i].answer === ansArr){
      score++;
    }
  }
  console.log(score);
  alert(`Score: ${score}`);
}

get();
