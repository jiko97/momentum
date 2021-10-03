const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "toDos";
function saveTodos() {
    // JSON.stringify() -> array 혹은 object를 string으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    // JSON.parse() -> string type을 array type으로 변환 
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    // .forEach(item) -> array의 모든 값(item)을 iterate하는 메소드
    // (1)함수를 직접 이름으로 넣어도 되고, 
    parsedTodos.forEach(paintTodo);
    // (2) arrow function('=>')을 사용해도 됨 
    // parsedTodos.forEach((item) => console.log("this is the turn of ",item));
}

// 배열.filter(item => '조건') 
// -> array의 item을 유지하기 위해서는 조건값이 true, 제외하기 위해서는 false 필요 
