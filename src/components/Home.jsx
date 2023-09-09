import React, { useEffect, useRef, useState } from 'react'
import {Link, Route,Routes} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import NewItem from './NewItem';
import Popup from 'reactjs-popup';

const Home = ({searchTerm}) => {
    const [post,setPost]=useState([])
    const [post2,setPost2]=useState([])
    const [filterpost,setfilterpost]=useState([])
    const [deletedid,setdelid]=useState([])
    const [temp,settemp]=useState([])
    const searchref=useRef([])
    const [bool,setbool]=useState(true)
    const [bool2,setbool2]=useState(true)
    const [popup,setpopup]=useState(false)
    var getsearch=[]
    var filtered=[]
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then((response) => response.json())
    .then((data) => {
      setPost(data)
      setPost2(data)
    }
      );
  },[])
  if(localStorage.temp===undefined || localStorage.temp===null ){
    localStorage.temp=JSON.stringify(post)
  }
  console.log(localStorage.temp)
  const handleclick=(key)=>{
    setdelid([...deletedid,key])
    setbool(false)
  }
  
  useEffect(()=>{ 
    post.filter(data=>!deletedid.includes(data.id)).map((filterdata)=>(
      filtered.push(filterdata)
    ))
    setfilterpost(filtered)
    
  },[deletedid])

  // useEffect(()=>{ 
  //   lclstore.filter(data=>!deletedid.includes(data.id)).map((filterdata)=>(
  //     filtered.push(filterdata)
  //   ))
  //   setfilterpost(filtered)
    
  // },[deletedid])

  useEffect(()=>{
      setPost(filterpost)
      
  },[filterpost])

  useEffect(()=>{
   if(searchTerm){
     setbool(true)
     setbool2(true)
      post.filter(data=>(data.title).includes(searchTerm) || (data.body).includes(searchTerm)).map((searcheddata)=>(
        getsearch.push(searcheddata)
      ))
      searchref.current=getsearch
      settemp(searchref.current) 
      localStorage.temp=JSON.stringify(searchref.current)
   }
   else if(!searchTerm || lclstore===undefined){
   setPost(post2)
   setbool2(false)
    console.log("reset post for empty search")
   }
   },[searchTerm])
   if(localStorage.temp!==""){
    var lclstore=JSON.parse(localStorage.temp)
    console.log(lclstore)
   }
  
   console.log(lclstore)
  const handleSearch=()=>{
    
    setbool(false)
    setbool2(false)
  }
  console.log(bool)
 const pop=()=>{
  setpopup(false)
 }
  return (
    <div className={popup?'body':""} onClick={pop}>
     <button className='refresh' onClick={handleSearch}>Refresh <i class="fa fa-refresh" ></i></button>  
     {lclstore!==undefined && bool2?<p className='result'>Total search results : {lclstore.length}</p>:""}
    <div className='home'>
       {lclstore!==undefined && bool ? 
        (lclstore.map((data)=>(
          
            <Card className='card' 
            sx={{width:{xs:'100%',sm:'358px',md:'320px'},
    boxShadow:'none',borderRadius:"12px" ,border:"1px solid gray"}}>
    <Popup trigger={<Link className='link' >
             <CardContent>
                <h2 className='cardtitle'>{data.title}</h2>
             <Typography className='cardcontent'>
                {data.body}
             </Typography>
             </CardContent>
             </Link>}
             position="top" >
              <NewItem id={data.id} setpopup={setpopup} />
             </Popup>
             <footer className='cardfooter'>
             <button key={data.id} className='cardbtn' onClick={()=>handleclick(data.id)}>Delete</button>
             </footer>
             
            </Card>
           
        ))):(post.map((data)=>(
         
            <Card className='card'
            sx={{width:{xs:'100%',sm:'358px',md:'320px'},
    boxShadow:'none',borderRadius:"12px" ,border:"1px solid gray"}}>
      <Popup  trigger={<Link className='link' >
             <CardContent >
                <h2 className='cardtitle'>{data.title}</h2>
             <Typography className='cardcontent'>
                {data.body}
             </Typography>
             </CardContent>
             </Link>} position="top" width="600px">
             <NewItem id={data.id} setpopup={setpopup}/>
             </Popup>
             <footer className='cardfooter'>
             <button key={data.id} className='cardbtn' onClick={()=>handleclick(data.id)}>Delete</button>
             </footer>
            </Card>
            
        )))}  
    </div>
    </div>
  )
}

export default Home
