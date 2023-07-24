import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./CreateToDoButton.css"

function CreateToDoButton(){
    return(
        <button className='button' 
        onClick={(event)=>{
            console.log("le diste click")
            console.log(event)
            console.log(event.target)
        }}>
        <AddCircleIcon  sx={{ color: "#1f1f1f" }}/> 
        Create New Task
        </button>
    )
}
export {CreateToDoButton}