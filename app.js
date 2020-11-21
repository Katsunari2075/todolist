const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');

const createTodoList = task => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

addTask.addEventListener('submit', e => {
  e.preventDefault();

  const task = addTask.add.value.trim();
  if(task.length) {
    createTodoList(task);
    addTask.reset();
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const search = document.querySelector('.search input');

const filterTasks = (term) => {

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
  
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTasks(term);
})

