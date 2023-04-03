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
import { useTheme } from '@mui/material/styles'
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
import * as source1 from 'src/views/forms/form-elements/pickers/PickersSourceCode'
import PickersRange, { ConditionForBadges } from 'src/views/forms/form-elements/pickers/PickersRange'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import BadgesTable from 'src/views/table/mui/BadgesTable'

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
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

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
    topWinners.push(<TextField sx={{ width: '210px', margin: '5px' }} label={`${i} winner prize`} />)
  }

  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='Create a badge' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
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
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12} xs={12}>
                <TextField id='title' fullWidth label='Title' required />
              </Grid>
              <Grid item sm={12} xs={12}>
                Image
                <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
              </Grid>
              <Grid item sm={2.5} xs={2.5}>
                <ConditionForBadges popperPlacement={popperPlacement} />
              </Grid>
              <Grid item sm={9.5} xs={9.5} mt={4}>
                <TextField
                  id='name'
                  type='number'
                  fullWidth
                  label='Points reward'
                  placeholder='These points will be rewarded to user'
                  required
                />
              </Grid>
              <Grid item sm={12}>
                <EditorWrapper>
                  <CardSnippet
                    sx={{ overflow: 'visible' }}
                    title='Description'
                    code={{
                      tsx: null,
                      jsx: source.EditorControlledJSXCode
                    }}
                  >
                    <Typography fontSize='1.25rem' m={2} fontWeight='520'>
                      Description
                    </Typography>
                    <EditorControlled />
                  </CardSnippet>
                </EditorWrapper>
              </Grid>
              <CardActions>
                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                  Save
                </Button>
              </CardActions>
              <Grid item xs={12}>
                <Card>
                  <CardHeader title='List of Badges approved' />
                  <BadgesTable />
                </Card>
              </Grid>
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
      <CreateContestForm />
    </div>
  )
}

export default index
