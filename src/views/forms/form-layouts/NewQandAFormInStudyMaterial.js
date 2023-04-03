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
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

const NewQandA = () => {
  const [Question, setQuestion] = useState('')
  const [Answer, setAnswer] = useState('')
  const [FileForQuestion, setFileForQuestion] = useState('')
  const [FileForAnswer, setFileForAnswer] = useState('')

  return (
    <>
      <CardHeader title='Add New Q & A' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={e => e.preventDefault()}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={Question}
              label='Question'
              placeholder='Write your question here'
              onChange={e => setQuestion(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            Upload image/video File for the question (optional)
            <TextField
              type='file'
              fullWidth
              InputProps={{
                inputProps: { accept: 'image/png, image/jpeg, video/mp4, video/mkv, video/webm '}
              }}
               value={FileForQuestion} 
               onChange={e => setFileForQuestion(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={Answer}
              label='Answer'
              placeholder='Write answer to your question here...'
              onChange={e => setAnswer(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            Upload image/video File for the answer  (optional)
            <TextField
              type='file'
              fullWidth
              InputProps={{
                inputProps: { accept: 'image/png, image/jpeg, video/mp4, video/mkv, video/webm '}
              }}
               value={FileForAnswer} 
               onChange={e => setFileForAnswer(e.target.value)}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <SwitchesCustomized />
          </Grid>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Save
            </Button>
            <Button type='reset' size='large' color='secondary' variant='outlined'>
              Discard
            </Button>
          </CardActions>

        </Grid>
      </form >
    </>
  )
}


export default NewQandA;
