// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import AddNewMCQ from 'src/views/components/dialogs/AddNewMCQDialog'
import { Typography } from '@mui/material'

const NewQuizInCourseSection = () => {
  const [language, setLanguage] = useState('')
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [attempts, setAttempts] = useState('')
  const [passMarks, setPassMarks] = useState('')
  
return (
    <form >
       <CardHeader title='New Quiz Form' />
      <Grid container spacing={6} >
        <Grid item sm={12} xs={12} mt={3}>
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
          <TextField id='name' autoFocus fullWidth label='Quiz Title' required value={title} onChange={e => setTitle(e.target.value)} />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField type='number' id='time' autoFocus fullWidth label='Time (in minutes)' placeholder='leave it blank for unlimited' value={time} onChange={e => setTime(e.target.value)} />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField id='Attempts' autoFocus fullWidth label='Number of attempts' placeholder='leave it blank for unlimited' value={attempts} onChange={e => setAttempts(e.target.value)} />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField autoFocus fullWidth label='Pass mark' required onChange={e => setPass(e.target.value)} />
        </Grid>
        <Grid item sm={12} xs={12}>
          <SwitchesCustomized />
        </Grid>

      </Grid>
      <Divider textAlign='left'>Questions</Divider>
      <Grid item sm={12} xs={12} mt={5} mb={5}>
        <AddNewMCQ />
      </Grid>

      <div className='dialog-actions-dense'>
        <Button type='submit' variant='contained' sx={{ margin: '10px' }}>Save</Button>
        <Button color='error' variant='contained'sx={{ margin: '10px' }}>Discard</Button>
      </div>
    </form>

  )
}

export default NewQuizInCourseSection
