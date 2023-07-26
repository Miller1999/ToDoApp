import { ToDoContext } from "../../Hooks/ToDoContext/ToDoContext"
import "./ToDoCounter.css"
import { useContext } from "react"

function ToDoCounter(){
    const {completedTodos,totalTodos} = useContext(ToDoContext)
    if(completedTodos === totalTodos){
        return(
            <h1>
                All tasks completed 😊
            </h1>
        )
    }
    return(
        <h1>
            Finished {completedTodos} of {totalTodos}
        </h1>
    )
}

export {ToDoCounter}