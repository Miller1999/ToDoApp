import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "./ToDoItem.css"


function ToDoItem({text,completed}){
    return(
    <li className={`card ${completed && "checked"}`}>
        <p>{text}</p>
        <div className='icons'>
        <button><CheckCircleIcon fontSize='large' id="check"/></button>
        <button><CancelIcon fontSize='large' id="cancel"/></button>    
        </div>

    </li>
    )
}

export {ToDoItem}