// ** React Imports
import { useState, forwardRef } from 'react'

import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'

// ** MUI Imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import CardSnippet from 'src/@core/components/card-snippet'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const NewCourseNotice = () => {
  const handleSubmit = () => {}

  return (
    <Card>
      <Grid container spacing={6}>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
            <Box sx={{ mb: 8, textAlign: 'center' }}>
              <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
                Add Details Of The Notice
              </Typography>
            </Box>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12}>
                <TextField fullWidth label='Title' />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Course</InputLabel>
                  <Select
                  
                    // value={category}
                    label='Course'
                    defaultValue=''
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'

                    // onChange={e => setCategory(e.target.value)}
                    placeholder='select a course'
                  >
                    <MenuItem value={10}>PCM Class 12th</MenuItem>
                    <MenuItem value={20}>Physics Class 11th</MenuItem>
                    <MenuItem value={30}>Science Class 8th</MenuItem>
                    <MenuItem value={30}>Maths Class 6th</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <EditorWrapper>
                  <CardSnippet
                    sx={{ overflow: 'visible' }}
                    title='Message'
                    code={{
                      tsx: null,
                      jsx: source.EditorControlledJSXCode
                    }}
                  >
                    <EditorControlled />
                  </CardSnippet>
                </EditorWrapper>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ pb: { xs: 8, sm: 12.5 } }}>
            <Button type='submit' variant='contained' sx={{ mr: 2 }}>
              Send the notice
            </Button>
          </DialogActions>
        </form>
      </Grid>
    </Card>
  )
}

export default NewCourseNotice
