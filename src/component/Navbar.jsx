import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{flexGrow:1}}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{mr:2}}
                >
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} align="left">
                <Link to='/' style={{color:'white',textDecoration:'none'}}>React</Link> 
                </Typography>
                <Button color='inherit' variant='outlined'>
                <Link to='/' >View</Link></Button>
                <Button color='inherit' variant='outlined'>
                <Link to='/add' >Add</Link></Button>    
               
            </Toolbar>
        </AppBar>
        </Box> 
    </div>
  )
}

export default Navbar