import React from "react";
import { createContext,useState } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const ToDoContext = createContext()

function ToDoProvider({children}){
        const [openModal,setOpenModal] = useState(false)
        const [searchValue,setSearchValue] = useState("")
        const {
            item: todos,
            saveItem: saveTodos,
            error,
            loading
        } = useLocalStorage("V1",[])
        //Estados derivados
        const completedTodos = todos.filter(todo => todo.completed === true).length
        const totalTodos = todos.length
        const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    
        const addTodo = (text) => {
            const newTodos = [...todos]
            newTodos.push({
                text,
                completed:false
            })
            saveTodos(newTodos)
        }

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
    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            searchValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            setSearchValue,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {
                children
            }
        </ToDoContext.Provider>
    )
}



export  {ToDoContext, ToDoProvider}