import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./CreateToDoButton.css"
import { useContext } from 'react';
import { ToDoContext } from '../../Hooks/ToDoContext/ToDoContext';

function CreateToDoButton(){
    const {openModal,setOpenModal} = useContext(ToDoContext)
    return(
        <button className='button' 
        onClick={()=>{
            setOpenModal(!openModal)
        }}>
        <AddCircleIcon  sx={{ color: "#1f1f1f" }}/> 
        Create New Task
        </button>
    )
}
export {CreateToDoButton}