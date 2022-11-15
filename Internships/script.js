const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoButton = document.querySelector(".todo-btn");

// Functions
const addTodo = (e) => {
  e.preventDefault();
  // Anim Div
  const anim = document.createElement("div");
  anim.classList.add("anim");
  // todo Div
  const todo = document.createElement("div");
  todo.classList.add("todo");
  // Todo h3
  const name = document.createElement("h3");
  name.innerText = todoInput.value;
  // Todo buttons
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  // Check Button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="i fas fa-check"></i>';
  completeBtn.classList.add("complete");
  // Trash Button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash");
  // Append elements (bring about a structure)
  todoList.appendChild(anim);
  anim.appendChild(todo);
  todo.appendChild(name);
  todo.appendChild(buttons);
  buttons.appendChild(completeBtn);
  buttons.appendChild(trashBtn);
  // Clear the input field
  todoInput.value = "";
};

const deleteCompleted = (e) => {
  const item = e.target;
  if (item.classList[0] === "trash") {
    const todo = item.parentElement.parentElement;
    const animElement = todo.parentElement;
    todo.classList.add("fade");
    todo.addEventListener("webkitTransitionEnd", () => {
      animElement.innerHTML = "";
    });
  }
  if (item.classList[0] === "complete") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  }
};

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCompleted);
