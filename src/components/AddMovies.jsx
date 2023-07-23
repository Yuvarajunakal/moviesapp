import React, { useState } from 'react'

const AddMovies = () => {
   const [title,setTitle] = useState('')
   const [gener,setGener] = useState('')
   const [language,setLanguage] = useState('')
   const [rating,setRating] = useState('')

   function handleClick(){
             fetch("http://localhost:4000/movies",{
                method:"POST",
                headers:{
                  "Access-control-Allow-Origin":true,
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  title:title,
                  gener:gener,
                 
                  rating:rating,
                  language:language
                })
             })
             .then((data)=>{
              console.log('yes')
             })
            // setRating("")
            // setGener("")
            // setLanguage('')
            // setTitle("")

            }
           
   

  return (
    <div>
      <div className='container w-25 mt-5'>
      <input className='form-control' type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input className='form-control' type="text" placeholder='gener' value={gener} onChange={(e)=>setGener(e.target.value)}/>
      <input className='form-control' type="text" placeholder='rating' value={rating} onChange={(e)=>setRating(e.target.value)}/>
      <input className='form-control' type="text" placeholder='language' value={language} onChange={(e)=>setLanguage(e.target.value)}/>
      
      <button className='btn btn-primary center-align' onClick={handleClick}>add movies</button>
      </div>
      
          

      <table className="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Gener</th>
      <th scope="col">Language</th>
      <th scope="col">Ratings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default AddMovies
