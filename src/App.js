
import './App.css';
import "./reset.css"
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/ToDoButton/CreateToDoButton';
import { useState } from 'react';

//Para guardar en el localStorage se debe JSON.stringify()
//Pra leer info del localStorage se debe JSON.parse()
//Custom Hooks -> funcion empezar por use

// const defaultTodos = [
//   {
//     text: "Cortar cebolla",
//     completed: true
//   },
//   {
//     text: "Curso React.js",
//     completed: false
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: false
//   },
//   {
//     text: "LALALALA",
//     completed: false
//   },
//   {
//     text: "Terminar curso",
//     completed: true
//   }
// ]

// localStorage.setItem("V1",JSON.stringify(defaultTodos))
// localStorage.removeItem("V1")

function useLocalStorage (itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {

  const [searchValue,setSearchValue] = useState("")
  const [todos,saveTodos] = useLocalStorage("V1",[])
  //Estados derivados
  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return (
    <main className='main'>
    <section className='head'>
    <CreateToDoButton/>
    <p>Hi, Miller </p>
    </section>
    <section className='head'>
    <ToDoCounter 
    completed = {completedTodos} 
    total= {totalTodos}
    />
    <ToDoSearch 
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    />
    </section>
      <ToDoList>
        {
          searchedTodos.map(todo => { 
            return(
              <ToDoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            )
          })
        }
      </ToDoList>
      
    </main>

  );
}



export default App;
