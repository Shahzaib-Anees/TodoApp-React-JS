import { useRef, useState } from "react";

function TodoApp() {
  const [todoArr, setTodoArr] = useState([]);
  const todoTask = useRef();

  const createTodo = (event) => {
    event.preventDefault();
    todoArr.push(todoTask.current.value);
    setTodoArr([...todoArr]);
    console.log(todoArr);

    todoTask.current.value = "";
  };

  const deleteTodoTask = (index) => {
    todoArr.splice(index, 1);
    console.log("Todo Deleted at index :", index);
    setTodoArr([...todoArr]);
  };

  const editTodoTask = (index) => {
    const editedTodo = prompt("Enter Edited Todo Value");
    todoArr.splice(index, 1, editedTodo);
    setTodoArr([...todoArr]);
  };

  return (
    <>
      <h1>Todo Application</h1>
      <form onSubmit={createTodo} id="todo-input-form">
        <input type="text" placeholder="enter task" ref={todoTask} />
        <button type="submit">Set Task</button>
      </form>
      <div id="todo-list-dom">
        {todoArr.length > 0 ? (
          todoArr.map((task, index) => {
            return (
              <div key={index} className="todo-list-task">
                <p>{task}</p>
                <div id="button-cont">
                  <button
                    className="task-button"
                    onClick={() => {
                      deleteTodoTask(index);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="task-button"
                    onClick={() => {
                      editTodoTask(index);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p id="elsed-para">No Task Found !</p>
        )}
      </div>
    </>
  );
}

export default TodoApp;
