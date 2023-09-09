import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Paper,IconButton} from '@mui/material';
import {Margin, Search} from '@mui/icons-material';
const Searchbar = ({searchTerm,setSearchTerm}) => {
  
  const handlechange=(e)=>{
    setSearchTerm(e.target.value)
    localStorage.setItem("value",e.target.value)
  }
 
  
  return (
    <Paper
    className="form"
    component="form"
    
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        ml:{sm:4,xs:2,lg:140}
    }}
    
    >
    <input
    className="search-bar"
    placeholder="Search..."
    onChange={handlechange}
    value={localStorage.getItem("value")}
    />  
    <IconButton type="submit" sx={{p:'10px' ,
       color:'red'   
    }}>
    <Search/>
    </IconButton>  
    </Paper>
  )
}

export default Searchbar