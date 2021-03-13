const list = require('../list');
const { status } = require('../../data');
const {
  v4: uuidv4
} = require('uuid');

//Hasta donde entiendo carga las listas con un array 
const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data,status.TODO));
}
//No se de donde vienen asi que no se como se generan las task
//source = Dato ingresado, data = arreglo, container = las listas
const addTask = (source, data, container) => {
  const task = source;
  data.push({
    id: uuidv4(),
    name: task.value,
    status: 'todo',
  });
  task.value = '';
  loadList(data, container)
}

//Envia las constantes (que parecen funciones) para su uso pero no veo donde
module.exports = {
  loadList,
  addTask,
};