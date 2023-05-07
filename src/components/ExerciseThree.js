import { useState } from "react";

function ExerciseThree() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, description: taskDescription },
    ]);
    setTaskDescription("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const taskItems = tasks.map((task) => (
    <div key={task.id} className="task">
      <span>{task.id}</span>
      <span>{task.description}</span>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  return (
    <>
      <div className="add-task">
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Write your task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="tasks">{taskItems}</div>
    </>
  );
}

export default ExerciseThree;
