const { v4: uuidv4 } = require('uuid');
//Arreglo con datos quemados
const stubNotes = [
  {
    id: uuidv4(),
    name: 'Learn Webpack',
    status: 'todo',
  },
  {
    id: uuidv4(),
    name: 'Learn React',
    status: 'todo',
  },
  {
    id: uuidv4(),
    name: 'Learn Angular',
    status: 'todo',
  },
  {
    id: uuidv4(),
    name: 'Testing ',
    status: 'todo',
  }
];

module.exports = { stubNotes } ;