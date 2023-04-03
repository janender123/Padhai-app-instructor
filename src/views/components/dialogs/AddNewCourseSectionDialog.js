// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import Grid from '@mui/material/Grid'

const DialogForm = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [title, setTitle] = useState([])

  return (
    <Fragment>
      <Button variant='contained' onClick={handleClickOpen}>
        Add New Section
      </Button>
      <Dialog open={open} fullWidth onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Section</DialogTitle>
        <DialogContent>
          <Grid container spacing={6}>
            <Grid item sm={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
                <Select
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  label='Language'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>Hindi</MenuItem>
                  <MenuItem value={30}>Gujarati</MenuItem>
                  {/* <MenuItem value={30}>12th</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField id='name' value={title} onChange={e=>setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
            </Grid>
            <Grid item sm={12} xs={12}>
              <SwitchesCustomized />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose} variant='contained'>Save</Button>
          <Button color='error' variant='contained' onClick={handleClose}>Discard</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogForm
