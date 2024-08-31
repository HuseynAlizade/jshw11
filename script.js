const addInput= document.getElementById('input'); 
const addBtn = document.getElementById('btn');
const taskListContainer= document.querySelector(".taskList");
const tasklist= document.querySelector('.taskList ul');

let todos = []

addBtn.addEventListener('click', function(e){
e.preventDefault();

const taskText= addInput.value.trim();

if (!taskText) return;

todos.push(taskText);
console.log(todos);
addInput.value ='';

sessionStorage.setItem("todos", JSON.stringify(todos));
updateTaskList()
})

//! Update Ul
function updateTaskList() {
tasklist.innerHTML="";

taskListContainer.style.display=todos.length? "block": "none";

todos.forEach(function (element, index) {
const liel= document.createElement("li");
const spanEl= document.createElement("span"); 
const buttonEl=document.createElement("button");

spanEl.textContent = element;
buttonEl.textContent = "Delete Task";
buttonEl.className = "btn";
buttonEl.addEventListener("click", function () {

removeTodo(index);
console.log(todos);
});

liel.insertAdjacentElement("afterbegin",spanEl); 
liel.insertAdjacentElement("beforeend",buttonEl);

tasklist.insertAdjacentElement("afterbegin", liel);
});
}
function removeTodo (index) {
todos.splice (index, 1);
sessionStorage.setItem("todos", JSON.stringify(todos));
updateTaskList()
}