// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Divider from '@mui/material/Divider'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'


const NewLessonFormInLiveClass = () => {
  const [language, setLanguage] = useState('')
  const [Description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [dateandtime, setdateandtime] = useState('')
  
return (
    <form onSubmit={e => e.preventDefault()}>
      <CardHeader title='New Lesson Form' />
      <Divider sx={{ m: '0 !important' }} />
      <Grid container spacing={5}>
        <Grid item xs={12} >
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
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={title}
            label='Title'
            placeholder='Add title of the lesson'
            onChange={e => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          Start Date and time of the lesson
          <TextField
            fullWidth
            type='datetime-local'
            value={dateandtime}
            placeholder='Add title of the lesson'
            onChange={e => setdateandtime(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <EditorWrapper>
            <CardSnippet
              sx={{ overflow: 'visible' }}
              title='Description of the Lesson'
              code={{
                tsx: null,
                jsx: source.EditorControlledJSXCode
              }}
            >
              <EditorControlled value={Description} onChange={e => setDescription(e.target.value)} />
            </CardSnippet>
          </EditorWrapper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <SwitchesCustomized />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button type='submit' variant='contained' size='large'>
              Save
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button color='error' variant='contained' size='large'>
              Discard
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )

}


export default NewLessonFormInLiveClass;
