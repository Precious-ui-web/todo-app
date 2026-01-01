const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodos(){
    todoList.innerHTML = "";


todos.forEach((todo, index) =>{
const li = document.createElement("li");
li.innerHTML = `<span>${todo}</span>
<button onclick = "deleteTodo(${index})">X</button>`;
todoList.appendChild(li);
})
}
addBtn.addEventListener("click", () =>{
    const value = input.value.trim();
    if (value === "")return;
    todos.push(value);
    input.value = "";

    renderTodos()
});


function deleteTodo(index){
todos.splice(index, 1);

renderTodos();
}