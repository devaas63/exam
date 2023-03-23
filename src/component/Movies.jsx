import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, createTheme, ThemeProvider, Rating, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Movie = () => {
    const deletes =(id) =>{
        console.log("Deleting "+id);
        axios.delete("http://localhost:3005/Show/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })
    }
    var [students, setstud] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/Show")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <br></br>
            <Typography variant='h3'>Movies</Typography>
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>MovieName</StyledTableCell>
                            <StyledTableCell> Director</StyledTableCell>
                            <StyledTableCell>Language</StyledTableCell>
                            <StyledTableCell>Genere</StyledTableCell>
                            <StyledTableCell>Release</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.MovieName}</TableCell>
                                <TableCell>{value.Director}</TableCell>
                                <TableCell>{value.Language}</TableCell>
                                <TableCell>{value.Genere}</TableCell>
                                <TableCell>{value.Release}</TableCell>
                                <TableCell><ThemeProvider theme={theme}><Button variant='contained' onClick={()=>deletes(value.id)}>Delete</Button></ThemeProvider></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
  )
}

export default Movies