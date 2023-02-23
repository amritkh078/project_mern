import React from 'react'
import {Appbar, Toolbar, IconButton, Typography} from '@mui/material'
import AirplaneTicketSharpIcon from '@mui/icons-material/AirplaneTicketSharp';

const Navbar = () => {
  return (
    <Appbar position="static">
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <AirplaneTicketSharpIcon />
        </IconButton>
        <Typography variant='h6' component='div'>
          Something
        </Typography>
      </Toolbar>
    </Appbar>
  )
}

export default Navbar