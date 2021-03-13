const {
  data,
  status
} = require('../data');
const todo = require('./todo');
const task = require('./task');
const doing = require('./doing');

require('../static/css/style.css');

const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');
const doingContainer = document.getElementById('doing');
const moveToDoing = (element) => {
  console.log("Data length: "+data.length)
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === element.target.value) {
      data[i].status = status.DOING;
    }
  }
  todo.loadList(data, todoContainer);
  doing.loadList(data, doingContainer);
  addMoveToDoingEvent();
}
todo.loadList(data, todoContainer);
const addMoveToDoingEvent = () => {
  const todoItems = document.querySelectorAll('#to-do input');
  for (let i = 0; i < todoItems.length; i++) {
    todoItems[i].addEventListener('change', moveToDoing);
  }
}
addMoveToDoingEvent();
doing.loadList(data, doingContainer);
task.addForm(app);
task.addButton.addEventListener('click', () => todo.addTask(
  document.getElementById("task-name"),
  data,
  todoContainer
));

app.appendChild(task.addButton);