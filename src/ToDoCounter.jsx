function ToDoCounter(props){
    const {total, completed} = props
    return(
        <h1>
            Has completado {completed} de {total} ToDo's
        </h1>
    )
}

export {ToDoCounter}