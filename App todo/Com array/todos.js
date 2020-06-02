var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
];

function renderTodos() {
  ulElement = document.querySelector("#app ul");

  if (ulElement == null) {
    ulElement = document.createElement('ul');
    divElement = document.querySelector("#app");
    divElement.appendChild(ulElement);
  } else ulElement.innerHTML = '';

  for (let pos = 0; pos < todos.length; pos++) {
    var liElement = document.createElement('li');
    var textLi = document.createTextNode(todos[pos]);

    liElement.appendChild(textLi);
    ulElement.appendChild(liElement);

    linkElement = document.createElement('a');
    linkElement.text = 'Excluir';
    linkElement.href = '#'

    liElement.appendChild(linkElement);

    linkElement.setAttribute('onclick', 'deleleTodo(' + pos + ')' );
  }
}

function addTodo() {
  var textTodo = inputElement.value;

  if (textTodo !== '') {
    todos.push(textTodo);
    inputElement.value = '';
    renderTodos();
  }
}

function deleleTodo(i) {
  todos.splice(i, 1);
  renderTodos();
}

buttonElement.onclick = addTodo;

//Chamadas de função.
renderTodos();
