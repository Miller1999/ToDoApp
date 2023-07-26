import SearchIcon from '@mui/icons-material/Search';
import "./ToDoSearch.css"
import React, { Fragment, useContext } from 'react';
import { useState } from 'react';
import { ToDoContext } from '../../Hooks/ToDoContext/ToDoContext';

function ToDoSearch(){
    const {searchValue,setSearchValue} = useContext(ToDoContext)
    const [search,setSearch] = useState(false)
    return(
        <div className='contenedorS'>
        {
            search ? <input 
            placeholder='Cortar cebolla'
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
            /> :
            <Fragment></Fragment>
        }
            
            <button className='search' onClick={()=>{setSearch(!search)}}><SearchIcon fontSize='large'/></button>
        </div>
        
    )
}

export {ToDoSearch}