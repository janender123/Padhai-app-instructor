// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/CorrectAnswer'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet-quiz-answers'
import * as source from 'src/views/forms/form-elements/checkbox/CheckboxesSourceCode'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Fade from '@mui/material/Fade'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const AnswerOption = () => {
  const [visible, setVisible] = useState(true)

  const removeElement = () => {
    setVisible(prev => !prev)
  }

  return (
    <>
      {visible && (
        <Card>
          <CardHeader action={<Icon icon='mdi:close' fontSize={20} onClick={removeElement} />} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12} mt={3}>
                <TextField id='name' required fullWidth label='Answer Title' />
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
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  )
}

const Question = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [language, setLanguage] = useState('')

  const [answerOptionList, setAnswerOptionList] = useState([
    <Card key={1}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={12} xs={12} mt={3}>
            <TextField id='name' required fullWidth label='Answer Title' />
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
        </Grid>
      </CardContent>
    </Card>,
    <Card key={2}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={12} xs={12} mt={3}>
            <TextField id='name' required fullWidth label='Answer Title' />
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
        </Grid>
      </CardContent>
    </Card>
  ])

  const handleSave = () => {
    // Handle save logic here
    setShowDialog(false)
  }

  const handleDiscard = () => {
    // Handle discard logic here
    setShowDialog(false)
  }

  const onAddBtnClick = () => {
    const newOptionId = `option-${Date.now()}`
    setAnswerOptionList(prevAnswerOptionList => [
      ...prevAnswerOptionList,
      <AnswerOption key={newOptionId} optionId={newOptionId} />
    ])
  }

  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardHeader title='Add a question' sx={{ margin: '10px' }} />
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
            <Grid item sm={6} xs={6}>
              <TextField id='name' fullWidth label='Question Title' required />
            </Grid>
            <Grid item sm={6} xs={6}>
              <TextField id='name' fullWidth label='Grade' required />
            </Grid>
            <Grid item sm={12} xs={12}>
              Image (Optional)
              <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <Divider textAlign='left'>Answers</Divider>
            </Grid>
            <Grid item sm={12} xs={12} m={5}>
              <Button variant='contained' onClick={onAddBtnClick}>
                Add Answer
              </Button>
            </Grid>
            <Grid item sm={12} xs={12}>
              {answerOptionList}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className='dialog-actions-dense'>
        <Button onClick={handleSave} variant='contained' sx={{ margin: '10px' }}>
          Save
        </Button>
        <Button color='error' variant='contained' onClick={handleDiscard} sx={{ margin: '10px' }}>
          Discard
        </Button>
      </div>
    </>
  )
}

const AddNewMCQ = () => {
  const [questionList, setQuestionList] = useState([])

  const handleButtonClick = () => {
    window.location.href = '/apps/import-questions/'
  }

  const onAddQuestion = () => {
    const newQuestionId = `question-${Date.now()}`
    setQuestionList(prevQuestionList => [...prevQuestionList, { id: newQuestionId, timestamp: Date.now() }])
  }
  const sortedQuestions = [...questionList].sort((a, b) => b.timestamp - a.timestamp)

  return (
    <Fragment>
      <Button variant='contained' onClick={handleButtonClick} sx={{ margin: '5px' }}>
        Import questions
      </Button>
      <Button variant='contained' onClick={onAddQuestion} sx={{ margin: '5px' }}>
        Add New Question
      </Button>
      <div>
        {sortedQuestions.map(question => (
          <Question key={question.id} questionId={question.id} />
        ))}
      </div>
    </Fragment>
  )
}

export default AddNewMCQ
