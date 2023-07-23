import SearchIcon from '@mui/icons-material/Search';
import "./ToDoSearch.css"

function ToDoSearch(){
    return(
        <button className='search'><SearchIcon fontSize='large'/></button>
    )
}

export {ToDoSearch}