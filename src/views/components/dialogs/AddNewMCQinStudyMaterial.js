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
import CardActions from '@mui/material/CardActions'

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
              <TextField id='name' autoFocus required fullWidth label='Write your answer here...' />
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

const AddNewMCQInStudyMaterial = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [answerOptionList, setAnswerOptionList] = useState([])

  const onAddBtnClick = () => {
    setAnswerOptionList(answerOptionList.concat(<AnswerOption key={answerOptionList.length} />))
  }

  return (
    <Fragment>
      <CardHeader title='Add New MCQ' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={e => e.preventDefault()}>
        <Grid container spacing={6}>
          <Grid item sm={12} xs={6} mt={3}>
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
          <Grid item sm={12} xs={6} mt={3}>
            <TextField id='name' autoFocus fullWidth label='Write your question here...' required />
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
          <Grid item sm={12} xs={12}>
            <Button variant='contained' onClick={onAddBtnClick}>
              Add Answer
            </Button>
          </Grid>
          <Grid item sm={12} xs={12}>
            <CardSnippet
              title=''
              code={{
                tsx: null
              }}
            >
              <Grid item sm={12} xs={12} mt={3}>
                <TextField id='name' autoFocus required fullWidth label='Write your answer here...' />
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
          {answerOptionList}
        </Grid>
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Save
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Discard
          </Button>
        </CardActions>
      </form>
    </Fragment>
  )
}

export default AddNewMCQInStudyMaterial
