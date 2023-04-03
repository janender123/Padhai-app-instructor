// ** React Imports
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'
import StepperCustomDot from './StepperCustomDot'
import StepperWrapper from 'src/@core/styles/mui/stepper'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Fragment, useState } from 'react'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/NewCourseThumbnail'
import toast from 'react-hot-toast'
import AddIconMenu from 'src/views/components/menu/AddIconInCourseMenu'
import IconButton from '@mui/material/IconButton'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Collapse from '@mui/material/Collapse'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import clsx from 'clsx'
import Icon from 'src/@core/components/icon'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import NewLesson from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import NewText from 'src/views/forms/form-layouts/NewTextLessonInCourseSection'
import NewQuiz from 'src/views/forms/form-layouts/NewQuizInCourseSection'
import NewAssignment from 'src/views/forms/form-layouts/NewAssignmentInCourseSection'
import NewQandA from '../form-layouts/NewQandAFormInStudyMaterial'
import AddNewMCQInStudyMaterial from 'src/views/components/dialogs/AddNewMCQinStudyMaterial'
import AddNewTFInStudyMaterial from 'src/views/components/dialogs/AddNewTFinStudyMaterial'
import CardActions from '@mui/material/CardActions'
import AddNewMCQ from 'src/views/components/dialogs/AddNewMCQDialog'

const AddSection = () => {
  const handleNewSectionDialog = () => setOpenDialog(true)
  const handleCloseNewSectionDialog = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [sectionList, setSectionList] = useState([]);
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')

  const Input = () => {
    const [EditedTitle, setEditedTitle] = useState('')
    const [anchorEl, setAnchorEl] = useState('')
    const [NewQAList, setNewQAList] = useState([]);
    const [MCQList, setMCQList] = useState([]);
    const [TFList, setTFList] = useState([]);
    const [collapsed, setCollapsed] = useState(false)
    const [EditSection, setEditSection] = useState(false);
    const handleClickEditSection = () => setEditSection(true)
    const handleCloseEditSection = () => setEditSection(false)

    const handleSaveEditSection = () => {
      setTitle(EditedTitle)
      setEditSection(false)
    }

    const handleClickNewQA = () => {
      const newQA = {
        type: 'newQA',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <NewQandA />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime(),
      };
      setNewQAList([newQA, ...NewQAList]);
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    };

    const handleClickNewMCQ = () => {
      const newQA = {
        type: 'newQA',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <AddNewMCQ />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime(),
      };
      setMCQList([newQA, ...MCQList]);
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    };

    const handleClickNewTF = () => {
      const newQA = {
        type: 'newQA',
        component: (
          <Grid item xs={12} sm={12} margin={3}>
            <Accordion sx={{ borderStyle: 'groove' }}>
              <AccordionDetails>
                <AddNewTFInStudyMaterial />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ),
        timestamp: new Date().getTime(),
      };
      setTFList([newQA, ...TFList]);
      if (collapsed === false) setCollapsed(!collapsed)
      setAnchorEl(null)
    };

    const combinedList = [
      ...MCQList.map((item) => ({ ...item, type: 'MCQ' })),
      ...TFList.map((item) => ({ ...item, type: 'TF' })),
      ...NewQAList.map((item) => ({ ...item, type: 'NewQA' })),
    ];
    const sortedList = combinedList.sort((a, b) => b.timestamp - a.timestamp);

    const handleCloseAddButton = () => {
      setAnchorEl(null)
    }

    const handleClickMenuAddButton = event => {
      setAnchorEl(event.currentTarget)
    }
    
return (<Card sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
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
                <Icon icon="material-symbols:add-circle" />
              </IconButton>
              <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleCloseAddButton} open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClickNewQA}>New Q&A</MenuItem>
                <MenuItem onClick={handleClickNewMCQ}>New MCQ</MenuItem>
                <MenuItem onClick={handleClickNewTF}>New T&F</MenuItem>
              </Menu>
            </div>
            <IconButton
              size='small'
              aria-label='edit'
              sx={{ mr: 2, color: 'text.secondary' }}
              onClick={handleClickEditSection}
            >
              <Icon icon="material-symbols:edit" />
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
                        {/* <MenuItem value={30}>12th</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <TextField defaultValue={EditedTitle === '' ? title : EditedTitle} onChange={e => setEditedTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <SwitchesCustomized />
                  </Grid>
                  <Grid item sm={2} xs={3}>
                    <Button size='large' type='submit' sx={{ mr: 0 }} variant='contained' onClick={handleSaveEditSection}>
                      Save
                    </Button>
                  </Grid>
                  <Grid item sm={2} xs={3}>
                    <Button type='reset' size='large' color='secondary' variant='outlined' onClick={handleCloseEditSection}>
                      Discard
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
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
            {sortedList.map((item,index) => (
              <div key={index}>
                {item.component}
              </div>
            ))}
          </div>
        </CardContent>
      </Collapse>
    </Card>)
  };

  const onAddSectionClick = () => {
    setSectionList(sectionList.concat(<Input key={sectionList.length} />));
    setOpenDialog(false)
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Fragment>
          <Button variant='contained' onClick={handleNewSectionDialog}>
            Add New Chapter
          </Button>
          <Dialog open={openDialog} fullWidth onClose={handleCloseNewSectionDialog} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
              New Chapter
            </DialogTitle>
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
                  <TextField id='name' required onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <SwitchesCustomized />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
              <Button onClick={onAddSectionClick} variant='contained'>Save</Button>
              <Button color='error' variant='contained' onClick={handleCloseNewSectionDialog}>Discard</Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </Grid>
      <Grid item xs={12} >
        {sectionList}
      </Grid>
    </Grid>)
}

const BasicInfo = () => {
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [title, setTitle] = useState('')
  const [Slug, setSlug] = useState('')
  const [Description, setDescription] = useState('')
  const [childCategory, setChildCategory] = useState('')
  const [language, setLanguage] = useState('')
  const [chapter, setChapter] = useState('')
  const [exercise, setExercise] = useState('')
  const [book, setBook] = useState('')
  
return (<Fragment>
    <Grid container spacing={5}>
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
        {/* <TextField
      fullWidth
      label='Sub-Category'
      value={subCategory}
      placeholder='Class'
      onChange={e => setSubCategory(e.target.value)}
    /> */}
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
        {/* <TextField
      fullWidth
      label='Child-Category'
      value={childCategory}
      placeholder='Stream'
      onChange={e => setChildCategory(e.target.value)}
    /> */}
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
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-outlined-label'>Book</InputLabel>
          <Select
            value={book}
            label='book'
            id='demo-simple-select-outlined'
            labelId='demo-simple-select-outlined-label'
            onChange={e => setBook(e.target.value)}
          >
            <MenuItem value={10}>RD Sharma</MenuItem>
            <MenuItem value={20}>IE Irodov</MenuItem>
            <MenuItem value={30}>HC Verma</MenuItem>
            {/* <MenuItem value={30}>12th</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  </Fragment>)
}

const steps = [
  {
    title: 'Basic information',
    subtitle: 'Enter basic details of the study material',
    component: <Card sx={{ padding: '30px' }}><BasicInfo /></Card>
  },
  {
    title: 'Add Section',
    subtitle: 'Add Study Material',
    component: <Card sx={{ padding: '30px' }}><AddSection /></Card>
  }
]

const VerticalStepperForStudyMaterial = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Card>
      <CardHeader title='Add Study Material' />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} className={clsx({ active: activeStep === index })}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.component}</Typography>
                    <div className='button-wrapper'>
                      <Button
                        size='small'
                        color='secondary'
                        variant='outlined'
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        Back
                      </Button>
                      <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <Box sx={{ mt: 2 }}>
            <Typography>All steps are completed!</Typography>
            <Button size='small' sx={{ mt: 2 }} variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default VerticalStepperForStudyMaterial
