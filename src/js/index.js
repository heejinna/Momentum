const $input = document.querySelector('input');
const $addBtn = document.querySelector('.add');
const $todolist = document.querySelector('#todolist');

function paintToDo(newTask) {
  newTask.preventDefault();
  const value = $input.value;
  value !== '' ? addContent(value) : alert('please type your task');
  $input.value = '';
}

function addContent(value) {
  const $ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.setAttribute('class', 'todo');
  li.innerText = value;
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteToDo);
  $ul.appendChild(li);
  li.appendChild(btn);
}

function deleteToDo(task) {
  const li = task.target.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

function init() {
  $addBtn.addEventListener('click', paintToDo);
  $input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      paintToDo(e);
    }
  });
}
init();
