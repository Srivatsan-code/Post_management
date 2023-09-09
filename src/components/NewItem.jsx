import React, { useEffect, useState } from 'react'


const NewItem = ({id,setpopup}) => {
    const [comment,setcomment]=useState([])
    const [op,setop]=useState(true)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(data=>data.json())
        .then(response=>setcomment(response))
        setpopup(true)
    },[])
   const close=()=>{
    setop(false)
    setpopup(false)
   }
  return (
    <>
   {op?(
    <div className='popup'>
      <div className='cmthead'>
      <div className='pop-heading'>{comment.length} Comments</div>
      <button className='clsbtn' onClick={close}><i class="fa fa-close" ></i></button>
       
       </div>
      {
comment.map((data)=>(
  <>
  <div className='cmt-content'>
    <div className='profile'>
    <img src='/profile.jpg' />
  <div className='mailid'>{data.email}</div>
  </div>
  <div className='comment'>{data.body}</div>
  </div>
  </>
))
      }
    </div>
    ):""}
    </>
  )
}

export default NewItem
