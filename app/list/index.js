//const addCheckButton = require('./check');
const list = (data, type) => {
  const container = document.createElement('div');
  const filtererData = data.filter(element => {
    if(element.status == type ){
      return element;
    }
  });
  if(!!filtererData && Array.isArray(filtererData)){
    filtererData.forEach( task => {
      container.appendChild(listElement(task))
    });
  }
  return container;
}

const listElement = task => {
  const element = document.createElement('div');
  element.innerHTML = task.name;
  //create checkbox
  const inputCheck = document.createElement("input");
  inputCheck.name = task.id;
  inputCheck.id = task.id;
  inputCheck.value = task.id;
  //inputCheck.id = task.name;
  inputCheck.type = "checkbox";
  element.appendChild(inputCheck);
  //finish creating the Checkbox
  return element;
}

module.exports = list;