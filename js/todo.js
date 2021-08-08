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
    progress.innerText = `Progress Report 🚩🚩🚩 ${count}/${countAll}`
    const result = parseInt(count)/parseInt(countAll);
    if (result < 0.25) {
        comment.innerText = `시작이 반입니다!`;
    } else if (result >= 0.25 && result < 0.5) {
        comment.innerText = `우리 아직 할 수 있어요! 좀 더 힘내봐요!`;
    } else if (result >= 0.5 && result < 0.75) {
        comment.innerText = `이제 정말 반을 넘었어요!`;
    } else if (result >= 0.75 && result < 1) {
        comment.innerText = `다 왔어요! 끝까지 화이팅!`;
    } else if (result === 1) {
        comment.innerText = `와! 우리 해냈어요!🎉`;
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
    toDoCheckBtn.innerText = "✔";
    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "❌";
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