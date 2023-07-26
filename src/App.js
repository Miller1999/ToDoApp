
import './App.css';
import "./reset.css"
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/ToDoButton/CreateToDoButton';
import { ToDoProvider,ToDoContext } from './Hooks/ToDoContext/ToDoContext';
import { Modal } from './components/Modal/Modal';
import { ToDoForm } from './components/ToDoForm/ToDoForm';


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



function App() {
  return (
    <ToDoProvider>
      <ToDoContext.Consumer>
        {
          ({          
            openModal,
            setOpenModal,
            loading,
            error, 
            searchedTodos,
            completeTodo,
            deleteTodo}) => (
              <main className='main'>
      <section className='head'>
      <CreateToDoButton/>
      {
        openModal && <Modal>
        <ToDoForm/>
      </Modal>
      }
      
      <p>Hi, Miller </p>
      </section>
      <section className='head'>
      <ToDoCounter />
      <ToDoSearch/>
      </section>
              <ToDoList>
              {loading && <p>Estamos cargando...</p>}
              {error && <p>Desesperate hay errores</p>}
              {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo 😊</p>}
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
  )
}
      </ToDoContext.Consumer>
    </ToDoProvider>
  );
}
export default App;
