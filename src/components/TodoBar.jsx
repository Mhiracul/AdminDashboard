import React, { useState } from "react";

const TodoBar = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "To Do", status: "todo" },
    { id: 2, title: "InProgress", status: "in-progress" },
    { id: 3, title: "Completed", status: "completed" },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const id = e.dataTransfer.getData("text");
    const updatedList = todoList.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, status: status } : todo
    );
    setTodoList(updatedList);
  };

  const getTodosByStatus = (status) =>
    todoList.filter((todo) => todo.status === status);

  return (
    <div className="flex  px-10  self-stretch ">
      <div
        className="w-full p-3 rounded-md"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "todo")}
      >
        {getTodosByStatus("todo").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full  text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                3
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full p-3  rounded-md mx-4"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "in-progress")}
      >
        {getTodosByStatus("in-progress").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                1
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full p-3  rounded-md flex"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "completed")}
      >
        {getTodosByStatus("completed").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                2
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBar;
