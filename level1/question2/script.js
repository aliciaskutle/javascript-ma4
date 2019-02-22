//Level 2 - Question 2
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => createTodos(todos))
  .catch(err => console.log(err));

function createTodos(todos) {
  var todoList = document.getElementById("todoList");

  for (var todo of todos) {
    todoList.innerHTML += `
    <div class="todo">
      <span class="todo-thing">Title: ${todo.title}</span>
      <span class="todo-thing">Completed: ${todo.completed}</span>
    </div>`;
  }
}
