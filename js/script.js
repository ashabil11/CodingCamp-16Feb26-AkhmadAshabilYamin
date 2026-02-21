let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    console.log(todoInput.value);
    console.log(todoDate.value);
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter a todo item and select a due date.');
    } else {
        const newTodo = {
            text: todoInput.value,
            date: todoDate.value
        };

        todos.push(newTodo);

        todoInput.value = '';
        todoDate.value = '';

        displayTodos();
    }
}


function displayTodos() {
    const todoList = document.getElementById('todo-list');
    
    todoList.innerHTML = '';

    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

function deleteAllTodo() {
    todos = [];
    displayTodos();
}

function filterTodos() { }