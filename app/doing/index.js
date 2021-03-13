const list = require('../list');
const { status } = require('../../data');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data, status.DOING));
}


module.exports = {
  loadList,
};