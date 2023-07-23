import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./CreateToDoButton.css"

function CreateToDoButton(){
    return(
        <button className='button'><AddCircleIcon  sx={{ color: "#1f1f1f" }}/> Create New Task</button>
    )
}
export {CreateToDoButton}