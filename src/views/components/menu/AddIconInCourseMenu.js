// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import IconButton from '@mui/material/IconButton'
import NewLesson from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import NewText from 'src/views/forms/form-layouts/NewTextLessonInCourseSection'
import NewQuiz from 'src/views/forms/form-layouts/NewQuizInCourseSection'
import NewAssignment from 'src/views/forms/form-layouts/NewAssignmentInCourseSection'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import {p} from './MenuBasic'

const AddIconMenu = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState('')
  const [openFile, setOpenFile] = useState(false)
  const [openText, setOpenText] = useState(false)
  const [openQuiz, setOpenQuiz] = useState(false)
  const [openAssignment, setOpenAssignment] = useState(false)
  const handleClickNewFile = () => setOpenFile(true)
  const handleCloseNewFile = () => setOpenFile(false)
  const handleClickNewText = () => setOpenText(true)
  const handleCloseNewText = () => setOpenText(false)
  const handleClickNewQuiz = () => setOpenQuiz(true)
  const handleCloseNewQuiz = () => setOpenQuiz(false)
  const handleClickNewAssignment = () => setOpenAssignment(true)
  const handleCloseNewAssignment = () => setOpenAssignment(false)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  
  return (
    <div>
      <IconButton
        size='small'
        aria-label='edit'
        sx={{ mr: 2, color: 'text.secondary' }}
      >
        <Icon icon="material-symbols:add-circle" onClick={handleClick} />
      </IconButton>
      <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClickNewFile}>New Lesson</MenuItem>
        <Dialog open={openFile} fullWidth onClose={handleCloseNewFile}>
          <DialogContent>
            <NewLesson />
          </DialogContent>
        </Dialog>
        <MenuItem onClick={handleClickNewText}>New Text</MenuItem>
        <Dialog open={openText} fullWidth onClose={handleCloseNewText}>
          <DialogContent>
            <NewText />
          </DialogContent>
        </Dialog>
        <MenuItem onClick={handleClickNewQuiz}>New Quiz</MenuItem>
        <Dialog open={openQuiz} fullWidth onClose={handleCloseNewQuiz}>
          <DialogContent>
            <NewQuiz />
          </DialogContent>
        </Dialog>
        <MenuItem onClick={handleClickNewAssignment}>New Assignment </MenuItem>
        <Dialog open={openAssignment} fullWidth onClose={handleCloseNewAssignment}>
          <DialogContent>
            <NewAssignment />
          </DialogContent>
        </Dialog>
      </Menu>
    </div>
  )
}

export default AddIconMenu;
