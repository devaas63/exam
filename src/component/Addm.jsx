import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Movies from './Movies'

const Addm = () => {
    var[movie,setmovie]=useState({
     
     MovieName:"",
     Director:"",
     Language:"",
     Genere:"",  
     Release:"",   
    })
    const handler = (e) => {
        const{name,value}=e.target
        setmovie({...movie,[name]:value})
    }
    const savedata = (e) => {
        axios.post(" http://localhost:3005/Show",movie)
        .then(response=>{
            alert("Added")            
        })
        .catch(error=>{
            alert("Failed")
        })
    }
  return (
    <div>
        <Typography variant='h3' align='center'>Add movies</Typography>
        <TextField name='MovieName' variant='standard' 
        label='MovieName' onChange='handler'value={movie.MovieName}/>
         <br></br>
         <br></br>
         <TextField name='Director' variant='standard'
        label='Director' onChange='handler' value={movie.Director}/>
         <br></br>
         <br></br>
         <TextField name='Language' variant='standard'
        label='Language' onChange='handler' value={movie.Language}/>
         <br></br>
         <br></br>
         <TextField name=' Genere' variant='standard'
        label=' Genere' onChange='handler'value={movie.Genere}/>
         <br></br>
         <br></br>
         <TextField name='Release' variant='standard'
        label='Release' onChange='handler'value={movie.Release}/>
         <br></br>
         <br></br>
         <Button variant='contained' onClick={savedata}>SUBMIT</Button>
         
    </div>
  )
}

export default Addm