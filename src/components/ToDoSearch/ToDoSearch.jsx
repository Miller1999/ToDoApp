import SearchIcon from '@mui/icons-material/Search';
import "./ToDoSearch.css"
import React, { Fragment } from 'react';
import { useState } from 'react';

function ToDoSearch({searchValue,setSearchValue}){
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