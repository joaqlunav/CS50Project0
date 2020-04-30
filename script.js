const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const text = prompt("Enter Todo text Please")
  const todo = createTodo(text);
  list.appendChild(todo);
  itemCountSpan.innerHTML++;
  setUnchecked();
}

function createTodo(text){
  const li = document.createElement('li')
  li.innerHTML = "<input type = 'checkbox' onChange= 'setUnchecked()'/>" + text +"<button class = 'todo-delete' onClick = 'deleteTodo(this.parentNode)'> Delete</button>"; 
  return li
}
function setUnchecked(){
  let total = 0;
  for(i = 0; i < list.getElementsByTagName('input').length; i++)
  {
    if(!list.getElementsByTagName('input')[i].checked)
    {
      total++;
    }
  }
  uncheckedCountSpan.innerHTML = total;
}
function deleteTodo(todo){
  list.removeChild(todo);
  setUnchecked();
  itemCountSpan.innerHTML--;
}