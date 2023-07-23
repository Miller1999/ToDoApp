import "./ToDoList.css"

function ToDoList({children}){
    return(
        <ul className="list">
            {children}
        </ul>
    )
}

export {ToDoList}