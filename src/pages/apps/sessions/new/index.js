import { useState } from 'react'

import Typography from '@mui/material/Typography'

// ** React Imports
import { Fragment } from 'react'
import { useTheme } from '@mui/material/styles'

// ** MUI Imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider, FormControlLabel, Switch } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet'
import Icon from 'src/@core/components/icon'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/CorrectAnswer'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import { number } from 'yup/lib/locale'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import PickersSpecificRange from 'src/views/forms/form-elements/pickers/PickersSpecificRange'

// ** Source code imports
import * as source1 from 'src/views/forms/form-elements/pickers/PickersSourceCode'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import ScheduleSession from 'src/views/forms/form-elements/pickers/ScheduleSession'

const AnswerOption = () => {
  const [visible, setVisible] = useState(true)

  const removeElement = () => {
    setVisible(prev => !prev)
  }

  return (
    <>
      {visible && (
        <Grid item sm={12} xs={12}>
          <CardHeader action={<Icon icon='mdi:close' fontSize={20} onClick={removeElement} />} />
          <CardSnippet
            title=''
            code={{
              tsx: null
            }}
          >
            <Grid item sm={12} xs={12} mt={3}>
              <TextField id='name' required fullWidth label='Write your answer here...' />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              Answer Image (optional)
              <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              <SwitchesCustomized />
            </Grid>
          </CardSnippet>
        </Grid>
      )}
    </>
  )
}

const AddNewQuestionInStudyMaterial = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [answerOptionList, setAnswerOptionList] = useState([])
  const [instructor, setInstructor] = useState([])

  const onAddBtnClick = () => {
    setAnswerOptionList(answerOptionList.concat(<AnswerOption key={answerOptionList.length} />))
  }
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [Description, setDescription] = useState('')
  const [invisible, setInvisible] = useState(false)

  const handleVideoSol = () => {
    setInvisible(!invisible)
  }
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='New Booking' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12} mt={3}>
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
              <Grid item xs={12} sm={6} mt={3}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Board</InputLabel>
                  <Select
                    value={category}
                    label='Board'
                    defaultValue=''
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                    onChange={e => setCategory(e.target.value)}
                  >
                    <MenuItem value={10}>CBSE</MenuItem>
                    <MenuItem value={20}>ICSE</MenuItem>
                    <MenuItem value={30}>UP Board</MenuItem>
                    <MenuItem value={30}>MP Board</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} mt={4}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Class</InputLabel>
                  <Select
                    value={subCategory}
                    label='Class'
                    defaultValue=''
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                    onChange={e => setSubCategory(e.target.value)}
                  >
                    <MenuItem value={10}>6th</MenuItem>
                    <MenuItem value={20}>7th</MenuItem>
                    <MenuItem value={30}>8th</MenuItem>
                    <MenuItem value={30}>12th</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} mt={4}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Stream</InputLabel>
                  <Select
                    value={childCategory}
                    label='Stream'
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                    onChange={e => setChildCategory(e.target.value)}
                  >
                    <MenuItem value={10}>Science</MenuItem>
                    <MenuItem value={20}>Arts</MenuItem>
                    <MenuItem value={30}>Commerce</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} mt={4}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Instructor</InputLabel>
                  <Select
                    value={instructor}
                    onChange={e => setInstructor(e.target.value)}
                    label='Instructor'
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                  >
                    <MenuItem value={10}>Mr. Pradeep Sharma</MenuItem>
                    <MenuItem value={20}>Mr. Deepak Kumar</MenuItem>
                    <MenuItem value={30}>Mr. Yogesh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} >
                  <ScheduleSession fullWidth popperPlacement={popperPlacement} />
              </Grid>
              <CardActions >
                <Button size='large' type='submit' sx={{marginTop:'20px'  }} variant='contained'>
                  Save
                </Button>
                <Button type='reset' sx={{ marginTop:'20px' }} size='large' color='secondary' variant='outlined'>
                  Discard
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </Card>
      </EditorWrapper>
    </DatePickerWrapper>
  )
}

const index = () => {
  return (
    <div>
      <AddNewQuestionInStudyMaterial />
    </div>
  )
}

export default index
