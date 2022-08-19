import React from 'react'
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
export default function Navbar() {
  return (
    <div className='m-4'>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
      className='m-2'
      variant='contained'
      color='primary'
      startIcon={<SaveIcon/>}
      >Save</Button>
    </div>
  )
}
