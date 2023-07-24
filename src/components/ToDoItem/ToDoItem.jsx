import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "./ToDoItem.css"


function ToDoItem({text,completed,onComplete,onDelete}){
    if(completed){
        return(
            <li className={`card ${completed && "checked"}`}>
            <p>{text}</p>
            <div className='icons'>
            <button onClick={onDelete}><CancelIcon fontSize='large' id="cancel"/></button>    
            </div>
        </li>
        )
    }
    else{
        return(
            <li className="card">
                <p>{text}</p>
                <div className='icons'>
                <button onClick={onComplete}><CheckCircleIcon fontSize='large' id="check"/></button>
                <button onClick={onDelete}><CancelIcon fontSize='large' id="cancel"/></button>    
                </div>
            </li>
            )
    }

}

export {ToDoItem}