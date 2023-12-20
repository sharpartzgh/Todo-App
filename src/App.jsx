/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import FilteringSection from './component/FilteringSection';
import AddedItems from './component/AddedItems';
// import { GetTheme } from './component/ThemeSelector.jsx'

function App() {

  // const [darkMode, ThemeSwitch] = GetTheme();

  const [todos, setTodos] = useState([]);

  // adding a function to add a new todo item to
  const addItem = (text) => {
    const newList = {
      id: Date.now(),
      title: text,
      complete: false,
    }
    setTodos([newList, ...todos])
  }
  // function to remove or delete a todo item
  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id)
    setTodos(newList)
  }
  // toggling between active and inactive
  // function 
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            complete: !todo.complete
          }
        }   
          return todo
        
      })
    )
  }
  //  function to handle filter state
  const [filter, setFilter] = useState("all")
  //function for updating the value of the useState
  const setFilterValue = (value) => setFilter(value);

  //  Was getting issue with this very code so refer to the other option if you face the same issue
  // now filter function using if statement
  // const keepFiltering = () => {
  //   let filterList;
  //   if (filter === "all"){
  //     filterList = todos;
  //   } else if (filter === "active") {
  //    filterList.filter(todo => !todo.complete)
  //   } else if (filter === "complete"){
  //    filterList.filter(todo => todo.complete)
  //   }
  //   return filterList.map(todo => (
  //     <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} />
  //   ))
  // }

  // Second alternative to the above code... menua mabr3 roff lol
  const keepFiltering = () => {
    if (filter === "all") {
      return todos.map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} />
      ));
    } else if (filter === "active") {
      return todos.filter(todo => !todo.complete).map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} />
      ));
    } else if (filter === "complete") {
      return todos.filter(todo => todo.complete).map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} />
      ));
    }
    return null; // No todos to render based on filter
  };


  //completed items
  const completedItems = () => {
    const clearCompletedItems = todos.filter(
      todo => !todo.complete
    )
    setTodos(clearCompletedItems)
  }

  // finally finally my code for counting all todos for all active and completed
 
  const getCount = () => {
    if (filter === "all") {
      return todos.length
    } else if (filter === "active"){
      return todos.filter(
        todo => !todo.complete
      ).length
    } else if (filter === "complete"){
      return todos.filter(
        todo => todo.complete
      ).length
    }
    return 0
  }

// darkMode settings
const [darkMode, setDarkMode] = useState(false);

const handleDarkMode = () => {
  setDarkMode(!darkMode);
}


  return (
    <div className={`${darkMode ? 'bg-[#242424]' : 'bg-[#F2F2F2]'} " min-h-screen pb-20 "`} >
        <div className='relative'>
          <Header HandleDarkMode={handleDarkMode} darkMode={darkMode} /> 
          <div className='bg-white lg:mx-auto lg:w-[50%] -top-36'>
          <Form
            addtheItem={addItem} 
          />
          </div>
        </div>
        
          {/* Filtering section */}
        <div className='lg:w-[50%] lg:mx-auto bg-white'>
          <FilteringSection 
          filterOut={setFilterValue}
          />
        </div>

        <div className='items-center flex flex-col justify-center  divide-y rounded-md '>
            {keepFiltering()}
        </div>
      
        <div className='flex items-center justify-around bg-white lg:w-[50%] lg:mx-auto py-6 px-7 rounded-md'>
          <h2 className="text- text-[18px]  ">{ getCount() }</h2>
          <button onClick={completedItems}>Clear Completed</button>
        </div>
    </div>
  );
}

export default App;
