// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** React Imports
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
import { Card, Divider } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet-quiz-answers'
import * as source from 'src/views/forms/form-elements/checkbox/CheckboxesSourceCode'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Fade from '@mui/material/Fade'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import SwitchesCustomizedStatus from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/CorrectAnswer'

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
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  return (
    <Fragment>
      <Card>
        <CardHeader title='Add New MCQ' />
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <form onSubmit={e => e.preventDefault()}>
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
                    {/* <MenuItem value={30}>12th</MenuItem> */}
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
              <Grid item xs={12} sm={6}>
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
                    {/* <MenuItem value={30}>12th</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12} xs={6} mt={3}>
                <TextField id='name' fullWidth label='Write your question here...' required />
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
        </CardContent>
      </Card>
    </Fragment>
  )
}

const AddNewTFInStudyMaterial = () => {
  // ** State
  const [language, setLanguage] = useState([])
  const [Answer, setAnswer] = useState([])
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  return (
    <Fragment>
      <Card>
        <CardHeader title='Add New True & false' />
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <form onSubmit={e => e.preventDefault()}>
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
                    {/* <MenuItem value={30}>12th</MenuItem> */}
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
              <Grid item xs={12} sm={6}>
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
                    {/* <MenuItem value={30}>12th</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12} xs={6} mt={3}>
                <TextField id='name' fullWidth label='Write your question here...' required />
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
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Select Answer</InputLabel>
                  <Select
                    value={Answer}
                    onChange={e => setAnswer(e.target.value)}
                    label='Select Answer'
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                  >
                    <MenuItem value={10}>True</MenuItem>
                    <MenuItem value={20}>False</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12} xs={12}>
                <SwitchesCustomizedStatus />
              </Grid>
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
        </CardContent>
      </Card>
    </Fragment>
  )
}

const TabsForAddingQuizQuestion = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='simple tabs example'>
        <Tab value='1' label='new mcq' />
        <Tab value='2' label='new T&F' />
      </TabList>
      <TabPanel value='1'>
        <AddNewMCQInStudyMaterial />
      </TabPanel>
      <TabPanel value='2'>
        <AddNewTFInStudyMaterial />
      </TabPanel>
    </TabContext>
  )
}

export default TabsForAddingQuizQuestion
