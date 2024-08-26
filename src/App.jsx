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
      <form onSubmit={createTodo}>
        <input type="text" placeholder="enter task" ref={todoTask} />
        <button type="submit">Set Task</button>
      </form>
      <ol>
        {todoArr.map((task, index) => {
          return (
            <div key={index}>
              <li>{task}</li>
              <button
                onClick={() => {
                  deleteTodoTask(index);
                }}
              >
                Delete Todo
              </button>
              <button
                onClick={() => {
                  editTodoTask(index);
                }}
              >
                Edit Todo
              </button>
            </div>
          );
        })}
      </ol>
    </>
  );
}

export default TodoApp;
