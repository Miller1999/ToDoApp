import "./ToDoCounter.css"

function ToDoCounter({total,completed}){
    if(completed === total){
        return(
            <h1>
                All tasks completed 😊
            </h1>
        )
    }
    return(
        <h1>
            Finished {completed} of {total}
        </h1>
    )
}

export {ToDoCounter}