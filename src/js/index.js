const $input = document.querySelector('input');
const $addBtn = document.querySelector('.add');
const $todolist = document.querySelector('#todolist');

function addTask(e) {
  e.preventDefault();
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
  btn.addEventListener('click', deleteTask);
  $ul.appendChild(li);
  li.appendChild(btn);
}

function deleteTask(e) {
  const li = e.target.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

$addBtn.addEventListener('click', addTask);
$input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTask(e);
  }
});
