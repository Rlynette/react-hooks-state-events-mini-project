import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task, setTask] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategoryBtn, setSelectedCategoryBtn] = useState('All')



  function addNewItemtoList(newItem) {
    setTask([...task, newItem])
  }

  function deleteItem(deleteItem) {
    setTask(task.filter((item) => item.text !== deleteItem))
  }


  const displayedItem = task

    .filter(
      (item) => {
        if (selectedCategoryBtn === 'All') return true
        return selectedCategoryBtn === item.category
      }
    )



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={categories}
        onBtn={selectedCategoryBtn}
        selectedButton={setSelectedCategoryBtn}
      />
      <NewTaskForm
      onTaskFormSubmit={addNewItemtoList}
      categories={categories}
       />
      <TaskList
      deleteItem={deleteItem}
      tasks={displayedItem}
      />
    </div>
  );
}

export default App;
