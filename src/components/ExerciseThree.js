import { useState } from "react";

const ExerciseThree = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: tasks.length + 1, description: taskDescription },
    ]);

    setTaskDescription("");
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const tasksElements = tasks.map((task) => (
    <div key={task.id} className="task">
      <span>{task.id}</span>
      <span>{task.description}</span>
      <button onClick={() => deleteTask(task.id)}>delete</button>
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
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks">{tasksElements}</div>
    </>
  );
};

export default ExerciseThree;
