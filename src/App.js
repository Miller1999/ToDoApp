
import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import { Fragment } from 'react';

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true
  },
  {
    text: "Curso React.js",
    completed: false
  },
  {
    text: "Llorar con la llorona",
    completed: false
  },
  {
    text: "Otra cosa",
    completed: false
  },
]

function App() {
  return (
    <Fragment>
      <ToDoCounter completed={15} total={25}/>
      <ToDoSearch/>
      <ToDoList>
        {
          defaultTodos.map(todo => {
            return(
              <ToDoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              />
            )
          })
        }
      </ToDoList>
      <CreateToDoButton/>
    </Fragment>

  );
}



export default App;
