//para usar el js donde se crea el boton DOM
const addButton = require('./addButton');
//Donde se crea  el form DOM
const addTaskForm = (container) => {
  const form = document.createElement("form");
  const fielset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerHTML = "Add new task";
  fielset.appendChild(legend);
  const taskName = document.createElement("input");
  taskName.id = "task-name";
  fielset.appendChild(taskName);
  form.appendChild(fielset);
  container.appendChild(form);
}
//Exporta para utilizarlo pero no se como se usa
module.exports = {
  addButton,
  addForm: addTaskForm
}
