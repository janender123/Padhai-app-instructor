import { useState } from 'react'
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CorrectAnswer from 'src/views/forms/form-elements/switch/CorrectAnswer'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider, Typography } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet-quiz-answers'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Fade from '@mui/material/Fade'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import SwitchesCustomizedStatus from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/CorrectAnswer'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import ContestsTable from 'src/views/table/mui/ContestsTable'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'

const AnswerOption = () => {
  ;<TextField />
}

const CreateContestForm = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [answerOptionList, setAnswerOptionList] = useState([])

  const onAddBtnClick = () => {
    setAnswerOptionList(answerOptionList.concat(<AnswerOption key={answerOptionList.length} />))
  }
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [Description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  let topWinners = []
  for (let i = 1; i <= value; i++) {
    topWinners.push(<TextField sx={{ width:'210px', margin: '5px' }} label={`${i} winner prize`} />)
  }

  return (
    <EditorWrapper>
      <Card sx={{ mt: 4 }}>
        <CardHeader title='Create a contest' />
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item sm={6} xs={6}>
              <TextField id='name' fullWidth label='Name' required />
            </Grid>
            <Grid item sm={6} xs={12}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6} mt={6}>
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
            <Grid item sm={6} xs={6}>
              Image
              <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
            </Grid>
            <Grid item sm={6} xs={6} mt={3}>
              Contest start date
              <TextField id='name' type='date' fullWidth label='' required />
            </Grid>
            <Grid item sm={6} xs={6} mt={3}>
              Contest end date
              <TextField id='name' type='date' fullWidth label='' required />
            </Grid>
            <Grid item sm={12} xs={6} mt={3}>
              Entry fee points
              <TextField
                id='name'
                type='number'
                fullWidth
                placeholder='these points will be deducted from users wallet'
                required
              />
            </Grid>
            <Grid item sm={12}>
              <EditorWrapper>
                <CardSnippet
                  sx={{ overflow: 'visible' }}
                  title=''
                  code={{
                    tsx: null,
                    jsx: source.EditorControlledJSXCode
                  }}
                >
                  <Typography fontSize='1.25rem' m={2} fontWeight='520'>Description of the contest </Typography>
                  <EditorControlled />
                </CardSnippet>
              </EditorWrapper>
            </Grid>
            <Grid item sm={12} xs={6} mt={3}>
              Distribute prize to top --- users
              <TextField
                id='name'
                type='number'
                value={value}
                fullWidth
                placeholder='for instance top 10 users will be getting prize'
                onChange={e => {
                  setValue(e.target.valueAsNumber)
                }}
                required
              />
            </Grid>
            <Grid item sm={12} xs={6} mt={3}>
              {topWinners}
            </Grid>

            <CardActions>
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Save
              </Button>
              <Button type='reset' size='large' color='secondary' variant='outlined'>
                Discard
              </Button>
            </CardActions>
            <Grid item xs={12}>
              <Card>
                <CardHeader title='List of Contests approved' />
                <ContestsTable />
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </EditorWrapper>
  )
}

const index = () => {
  return (
    <div>
      <CreateContestForm />
    </div>
  )
}

export default index
