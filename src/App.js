
import './App.css';
import "./reset.css"
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/ToDoButton/CreateToDoButton';


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
    completed: true
  },
]

function App() {
  return (
    <main className='main'>
    <section className='head'>
    <CreateToDoButton/>
    <p>Hi, Miller </p>
    </section>
    <section className='head'>
    <ToDoCounter />
    <ToDoSearch/>
    </section>
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
      
    </main>

  );
}



export default App;
