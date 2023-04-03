// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Icon Imports
// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import Chip from '@mui/material/Chip'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Collapse from '@mui/material/Collapse'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import AddNewCourseDialog from 'src/views/components/dialogs/AddNewCourseSectionDialog'
import AddNewQuizDialog from 'src/views/components/dialogs/AddNewQuizDialog'
import CardActionAll from 'src/views/ui/cards/actions//CardActionNewCourseSection'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormLayoutsBasic from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import Icon from 'src/@core/components/icon'
import EditQuiz from 'src/views/components/dialogs/EditQuiz'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import Menu from '@mui/material/Menu'
import NewLesson from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import NewText from 'src/views/forms/form-layouts/NewTextLessonInCourseSection'
import NewQuiz from 'src/views/forms/form-layouts/NewQuizInCourseSection'
import NewAssignment from 'src/views/forms/form-layouts/NewAssignmentInCourseSection'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// ** Data
import { courseTags } from 'src/@fake-db/autocomplete'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'

const steps = [
  {
    title: 'Basic Information',
    subtitle: 'Add Basic Details of the course'
  },
  {
    title: 'Additional info',
    subtitle: 'Add Additional Details of the course'
  },
  {
    title: 'Content',
    subtitle: 'Add Chapters of the course'
  },
  {
    title: 'Quiz ',
    subtitle: 'Add Quiz for the course'
  }
]

const AddSection = () => {
  const handleNewSectionDialog = () => setOpenDialog(true)
  const handleCloseNewSectionDialog = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [sectionList, setSectionList] = useState([])
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')

  const Input = () => {
    const [EditedTitle, setEditedTitle] = useState('')
    const [anchorEl, setAnchorEl] = useState('')
    const [LessonList, setLessonList] = useState([])
    const [TextList, setTextList] = useState([])
    const [QuizList, setQuizList] = useState([])
    const [AssignmentList, setAssignmentList] = useState([])
    const [collapsed, setCollapsed] = useState(false)

    const handleCloseAddButton = () => {
      setAnchorEl(null)
    }

    const combinedList = [
      ...LessonList.map(item => ({ ...item, type: 'Lesson' })),
      ...AssignmentList.map(item => ({ ...item, type: 'Assignment' })),
      ...TextList.map(item => ({ ...item, type: 'Text' })),
      ...QuizList.map(item => ({ ...item, type: 'Quiz' }))
    ]
    const sortedList = combinedList.sort((a, b) => b.timestamp - a.timestamp)

    const handleClickMenuAddButton = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleClickNewLesson = () => {
      const newLesson = {
        type: 'Lesson',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <NewLesson />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime()
      }
      setLessonList([newLesson, ...LessonList])
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    }

    const handleClickNewText = () => {
      const newText = {
        type: 'Text',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <NewText />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime()
      }
      setTextList([newText, ...TextList])
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    }

    const handleClickNewQuiz = () => {
      const newQuiz = {
        type: 'Quiz',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <NewQuiz />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime()
      }
      setQuizList([newQuiz, ...QuizList])
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    }

    const handleClickNewAssignment = () => {
      const newAssignment = {
        type: 'Assignment',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <NewAssignment />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime()
      }
      setAssignmentList([newAssignment, ...AssignmentList])
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    }

    const [EditSection, setEditSection] = useState(false)
    const handleClickEditSection = () => setEditSection(true)
    const handleCloseEditSection = () => setEditSection(false)

    const handleSaveEditSection = () => {
      setEditSection(false)
    }
    const [visible, setVisible] = useState(true)

    const removeSection = () => {
      setVisible(prev => !prev)
    }

    return (
      <>
        {visible && (
          <Card sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
            <CardHeader
              title={EditedTitle === '' ? title : EditedTitle}
              action={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <IconButton
                      size='small'
                      aria-label='edit'
                      sx={{ mr: 2, color: 'text.secondary' }}
                      onClick={handleClickMenuAddButton}
                    >
                      <Icon icon='material-symbols:add-circle' />
                    </IconButton>
                    <Menu
                      keepMounted
                      id='simple-menu'
                      anchorEl={anchorEl}
                      onClose={handleCloseAddButton}
                      open={Boolean(anchorEl)}
                    >
                      <MenuItem onClick={handleClickNewLesson}>New Lesson</MenuItem>
                      <MenuItem onClick={handleClickNewText}>New Text</MenuItem>
                      <MenuItem onClick={handleClickNewQuiz}>New Quiz</MenuItem>
                      <MenuItem onClick={handleClickNewAssignment}>New Assignment </MenuItem>
                    </Menu>
                  </div>
                  <IconButton
                    size='small'
                    aria-label='edit'
                    sx={{ mr: 2, color: 'text.secondary' }}
                    onClick={handleClickEditSection}
                  >
                    <Icon icon='material-symbols:edit' />
                  </IconButton>
                  <Dialog open={EditSection} fullWidth onClose={handleCloseEditSection}>
                    <DialogContent>
                      <Grid container spacing={6}>
                        <Grid item sm={12} xs={12}>
                          <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
                            <Select
                              value={language}
                              defaultValue={language}
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
                          <TextField
                            defaultValue={EditedTitle === '' ? title : EditedTitle}
                            onChange={e => setEditedTitle(e.target.value)}
                            autoFocus
                            fullWidth
                            label='Section Title'
                          />
                        </Grid>
                        <Grid item sm={12} xs={12}>
                          <SwitchesCustomized />
                        </Grid>
                        <Grid item sm={2} xs={3}>
                          <Button
                            size='large'
                            type='submit'
                            sx={{ mr: 0 }}
                            variant='contained'
                            onClick={handleSaveEditSection}
                          >
                            Save
                          </Button>
                        </Grid>
                        <Grid item sm={2} xs={3}>
                          <Button
                            type='reset'
                            size='large'
                            color='secondary'
                            variant='outlined'
                            onClick={handleCloseEditSection}
                          >
                            Discard
                          </Button>
                        </Grid>
                      </Grid>
                    </DialogContent>
                  </Dialog>
                  <IconButton
                    size='small'
                    aria-label='delete'
                    sx={{ mr: 2, color: 'text.secondary' }}
                    onClick={removeSection}
                  >
                    <Icon icon='material-symbols:delete-sharp' />
                  </IconButton>
                  <IconButton size='small' aria-label='cursor' sx={{ mr: 2, color: 'text.secondary' }}>
                    <Icon icon='mdi:cursor-move' />
                  </IconButton>
                  <IconButton
                    size='small'
                    aria-label='collapse'
                    sx={{ mr: 2, color: 'text.secondary' }}
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <Icon fontSize={20} icon={!collapsed ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
                  </IconButton>
                </Box>
              }
            />
            <Collapse in={collapsed}>
              <CardContent>
                <div>
                  {sortedList.map((item, index) => (
                    <div key={index}>{item.component}</div>
                  ))}
                </div>
              </CardContent>
            </Collapse>
          </Card>
        )}
      </>
    )
  }

  const onAddSectionClick = () => {
    setSectionList([...sectionList, <Input key={sectionList.length} />])
    setOpenDialog(false)
  }

  const handleDragEnd = result => {
    if (!result.destination) {
      return
    }

    const items = Array.from(sectionList)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSectionList(items)
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Fragment>
          <Button variant='contained' onClick={handleNewSectionDialog}>
            Add New Section
          </Button>
          <Dialog open={openDialog} fullWidth onClose={handleCloseNewSectionDialog} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>New Section</DialogTitle>
            <DialogContent>
              <Grid container spacing={6}>
                <Grid item sm={12} xs={12}>
                  <FormControl fullWidth style={{ marginTop: '5px' }}>
                    <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
                    <Select
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
                  <TextField
                    id='name'
                    onChange={e => setTitle(e.target.value)}
                    autoFocus
                    fullWidth
                    label='Section Title'
                  />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <SwitchesCustomized />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
              <Button onClick={onAddSectionClick} variant='contained'>
                Save
              </Button>
              <Button color='error' variant='contained' onClick={handleCloseNewSectionDialog}>
                Discard
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </Grid>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid item xs={12}>
          <Droppable droppableId='sections'>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sectionList.map((section, index) => (
                  <Draggable key={index} draggableId={`section-${index}`} index={index}>
                    {provided => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        {section}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </DragDropContext>
    </Grid>
  )
}

const NewCourseForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [childCategory, setChildCategory] = useState('')
  const [instructor, setInstructor] = useState('')
  const [alsoIn, setAlsoIn] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [title, setTitle] = useState('')
  const [Slug, setSlug] = useState('')
  const [Description, setDescription] = useState('')
  const [courseTag, setCourseTag] = useState([])
  const [Status, setStatus] = useState([])
  const [duration, setDuration] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [language, setLanguage] = useState('')
  const [assignment, setAssignment] = useState([])
  const [drip, setDrip] = useState([])

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Fragment>
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
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Also in which category</InputLabel>
                <Select
                  value={alsoIn}
                  onChange={e => setAlsoIn(e.target.value)}
                  label='Also in which category'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>Science CBSE 6th</MenuItem>
                  <MenuItem value={20}>Science ICSE 6th</MenuItem>
                  <MenuItem value={30}>Maths CBSE 6th</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
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
              <TextField
                fullWidth
                label='Title'
                value={title}
                placeholder='Title'
                onChange={e => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Slug'
                value={Slug}
                placeholder='Slug'
                onChange={e => setSlug(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <EditorWrapper>
                <CardSnippet
                  sx={{ overflow: 'visible' }}
                  title='Description of the course'
                  code={{
                    tsx: null,
                    jsx: source.EditorControlledJSXCode
                  }}
                >
                  <EditorControlled value={Description} onChange={e => setDescription(e.target.value)} />
                </CardSnippet>
              </EditorWrapper>
            </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                multiple
                id='autocomplete-multiple-filled'
                defaultValue={[courseTags[11].title]}
                options={courseTags.map(option => option.title)}
                renderInput={params => <TextField {...params} label='Course Tags' placeholder='Add course tags...' />}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip variant='outlined' label={option} {...getTagProps({ index })} key={index} />
                  ))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='number'
                label='Duration of the course (in minutes) '
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              Image/Thumbnail for the course
              <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
                value={thumbnail}
                onChange={e => setThumbnail(e.target.value)}
              />
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12}>
              <AddSection />
            </Grid>
          </Fragment>
        )
      case 3:
        return (
          <Fragment key={step}>
            <Grid item xs={12}>
              <AddNewQuizDialog />
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size='large'
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ mt: 4 }}>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </Fragment>
  )
}

export default NewCourseForm
