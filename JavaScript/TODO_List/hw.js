const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector(".closeBtn");
const ul = document.querySelector(".todo-list");

//監聽新增
addBtn.addEventListener("click", () => {
  addNewTask();
});
//監聽刪除
ul.addEventListener("click", (e) => {
  if (e.target.className === "closeBtn") {
    delTask();
  }
});
//監聽Ｅnter
taskInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addNewTask();
  }
});

//新增任務function
function addNewTask() {
  if (taskInput.value.trim() === "") {
    window.alert("請輸入內容!!!");
  } else {
    const inputText = `<li class="todo-item">
      <span class="item">${taskInput.value}</span>
      <button class="closeBtn">X</button>
    </li>`;
    ul.insertAdjacentHTML("afterbegin", inputText);
    taskInput.value = "";
  }
}

//刪除function
function delTask() {
  const li = document.querySelector(".todo-item");
  li.remove();
}
