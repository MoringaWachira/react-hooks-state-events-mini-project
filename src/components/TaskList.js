import React from "react";
import Task from "./Task";

function TaskList({tasks, taskDelete}) {

  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      taskDelete={taskDelete}
    />
  ));
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}

    </div>
  );
}

export default TaskList;






