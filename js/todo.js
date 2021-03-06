const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const progress = document.querySelector("#progress span:first-child");
const comment = document.querySelector("#progress span:last-child");


const TODOS_KEY = "todos"

let toDos = [];

function progressReport() {
    const count = document.querySelectorAll('.strikeOut').length;
    const countAll = toDoList.childNodes.length;
    progress.innerText = `Progress Report π©π©π© ${count}/${countAll}`
    const result = parseInt(count)/parseInt(countAll);
    if (result < 0.25) {
        comment.innerText = `μμμ΄ λ°μλλ€!`;
    } else if (result >= 0.25 && result < 0.5) {
        comment.innerText = `μ°λ¦¬ μμ§ ν  μ μμ΄μ! μ’ λ νλ΄λ΄μ!`;
    } else if (result >= 0.5 && result < 0.75) {
        comment.innerText = `μ΄μ  μ λ§ λ°μ λμμ΄μ!`;
    } else if (result >= 0.75 && result < 1) {
        comment.innerText = `λ€ μμ΄μ! λκΉμ§ νμ΄ν!`;
    } else if (result === 1) {
        comment.innerText = `μ! μ°λ¦¬ ν΄λμ΄μ!π`;
    }    
}

function checkToDo(event) {
    const check = event.target.parentElement;
    check.classList.toggle("strikeOut");
    progressReport()
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    progressReport()
}

function paintToDo(newTodo) {
    const toDoLi = document.createElement("li");
    toDoLi.id = newTodo.id;
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newTodo.text;
    const toDoCheckBtn = document.createElement("button");
    toDoCheckBtn.innerText = "β";
    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "β";
    toDoCheckBtn.classList.add("checkBtn");
    toDoDelBtn.classList.add("delBtn");
    toDoDelBtn.addEventListener("click", deleteToDo);
    toDoCheckBtn.addEventListener("click", checkToDo);
    toDoLi.appendChild(toDoSpan);
    toDoLi.appendChild(toDoCheckBtn);
    toDoLi.appendChild(toDoDelBtn);
    toDoList.appendChild(toDoLi);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   const newTodoObj = {
       text: newTodo,
       id: Date.now()
   };
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
   progressReport();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    progressReport();
} 