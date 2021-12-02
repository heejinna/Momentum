const $input = document.querySelector('input');
const $addBtn = document.querySelector('.add');
const $list = document.querySelector('#list');

function addTask(e) {
  e.preventDefault();
  let value = $input.value;
  value !== '' ? addContent(value) : alert('please type your task first');
  $input.value = '';
}

function addContent(value) {
  const $ul = document.querySelector('ul');
  const li = document.createElement('li');
  const btn = document.createElement('button');
  li.setAttribute('class', 'todo');
  $ul.appendChild(li);
  li.innerHTML = `${value}<button id='delete' class='btn' type='button'>X</button>`;
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
$list.addEventListener('click', deleteTask);
