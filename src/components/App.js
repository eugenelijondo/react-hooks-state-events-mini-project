import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleDeleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onSelectCategory={handleFilterChange}
      />
      <NewTaskForm categories={CATEGORIES.filter(cat => cat !== "All")} onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks.filter(task => filteredCategory === "All" || task.category === filteredCategory)}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
