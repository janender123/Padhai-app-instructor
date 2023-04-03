// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Backdrop from '@mui/material/Backdrop'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import AccordionSimple from 'src/views/components/accordion/LessonsAccordionNewCourse'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormLayoutsBasic from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import AddIconMenu from 'src/views/components/menu/AddIconInCourseMenu'
import Grid from '@mui/material/Grid'
import { margin } from '@mui/system'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import TextField from '@mui/material/TextField'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from "react-reorder"; import move from "lodash-move";

export default function CardActionAll() {
  // ** States
  const [reload, setReload] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [collapsedOne, setCollapsedOne] = useState(false)
  const [collapsedTwo, setCollapsedTwo] = useState(false)
  const [EditSection, setEditSection] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false)
  const [language, setLanguage] = useState([])
  const [title, setTitle] = useState([])

  const [visibility, setVisibility] = useState(true)
  const handleClickEditSection = () => setEditSection(true)
  const handleCloseEditSection = () => setEditSection(false)
  
  const onReorder = (from, to) => {
    setCardArray(move(CardArray, from, to));
  };

  const CardArray=[
    <Card key={CardArray.length} sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
      <CardHeader 
        title='Physics Optics - Class 12'
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIconMenu />
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
                    <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <SwitchesCustomized />
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            <IconButton
              size='small'
              aria-label='delete'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="material-symbols:delete-sharp" />
            </IconButton>
            <IconButton
              size='small'
              aria-label='cursor'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="mdi:cursor-move" />
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
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-1'
                  aria-controls='panel-content-1'
                  expandIcon={
                    <Icon icon='mdi:chevron-down' />}
                >
                  <Typography>What is Light?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-2'
                  aria-controls='panel-content-2'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Lenses and Mirrors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-3'
                  aria-controls='panel-content-3'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Concave and Convex lenses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </div>
        </CardContent>
      </Collapse>
    </Card>,
    <Card key={CardArray.length} sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
      <CardHeader
        
        title='Physics Semiconductors - Class 12'
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIconMenu />
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
                    <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <SwitchesCustomized />
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            <IconButton
              size='small'
              aria-label='delete'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="material-symbols:delete-sharp" />
            </IconButton>
            <IconButton
              size='small'
              aria-label='cursor'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="mdi:cursor-move" />
            </IconButton>

            {/* <IconButton
         size='small'
         aria-label='close'
         sx={{ color: 'text.secondary' }}
         onClick={() => setVisibility(false)}
       >
         <Icon icon='mdi:close' fontSize={20} />
       </IconButton> */}
            <IconButton
              size='small'
              aria-label='collapse'
              sx={{ mr: 2, color: 'text.secondary' }}
              onClick={() => setCollapsedOne(!collapsedOne)}
            >
              <Icon fontSize={20} icon={!collapsedOne ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
            </IconButton>
          </Box>
        }
      />
      <Collapse in={collapsedOne}>
        <CardContent>
          <div>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-1'
                  aria-controls='panel-content-1'
                  expandIcon={
                    <Icon icon='mdi:chevron-down' />}
                >
                  <Typography>What are semiconductors?</Typography>

                  {/* <Icon icon='mdi:refresh' fontSize={20} /> */}

                </AccordionSummary>

                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion></Grid>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-2'
                  aria-controls='panel-content-2'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>p-type and n-type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid><Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-3'
                  aria-controls='panel-content-3'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Uses of semiconductors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion></Grid>
          </div>
        </CardContent>
      </Collapse>
    </Card>,
    <Card key={CardArray.length} sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
      <CardHeader
        
        title='Physics Electricity - Class 12'
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIconMenu />
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
                    <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <SwitchesCustomized />
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            <IconButton
              size='small'
              aria-label='delete'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="material-symbols:delete-sharp" />
            </IconButton>
            <IconButton
              size='small'
              aria-label='cursor'
              sx={{ mr: 2, color: 'text.secondary' }}

            // onClick={() => setCollapsed(!collapsed)}
            >
              <Icon icon="mdi:cursor-move" />
            </IconButton>

            {/* <IconButton
                size='small'
                aria-label='close'
                sx={{ color: 'text.secondary' }}
                onClick={() => setVisibility(false)}
              >
                <Icon icon='mdi:close' fontSize={20} />
              </IconButton> */}
            <IconButton
              size='small'
              aria-label='collapse'
              sx={{ mr: 2, color: 'text.secondary' }}
              onClick={() => setCollapsedTwo(!collapsedTwo)}
            >
              <Icon fontSize={20} icon={!collapsedTwo ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
            </IconButton>
          </Box>
        }
      />
      <Collapse in={collapsedTwo}>
        <CardContent>
          <div >
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-1'
                  aria-controls='panel-content-1'
                  expandIcon={
                    <Icon icon='mdi:chevron-down' />}
                >
                  <Typography>What is Electricity?</Typography>

                  {/* <Icon icon='mdi:refresh' fontSize={20} /> */}

                </AccordionSummary>

                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-2'
                  aria-controls='panel-content-2'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Ohm's law</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} margin={3}>
              <Accordion sx={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-3'
                  aria-controls='panel-content-3'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Applications of Electricity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLayoutsBasic />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  ];

  const handleClick = event => {
    setIsShown(current => !current);
  };
  
return (
    <Fade in={visibility} timeout={300}>

      <Card sx={{ position: 'relative' }}>
        {/* <Reorder
          reorderId="my-list" // Unique ID that is used internally to track this list (required)
          reorderGroup="reorder-group" // A group ID that allows items to be dragged between lists of the same group (optional)
          // getRef={this.storeRef.bind(this)} // Function that is passed a reference to the root node when mounted (optional)
          component="div" // Tag name or Component to be used for the wrapping element (optional), defaults to 'div'
          placeholderClassName="placeholder" // Class name to be applied to placeholder elements (optional), defaults to 'placeholder'
          draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
          lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
          holdTime={500} // Default hold time before dragging begins (mouse & touch) (optional), defaults to 0
          touchHoldTime={500} // Hold time before dragging begins on touch devices (optional), defaults to holdTime
          mouseHoldTime={200} // Hold time before dragging begins with mouse (optional), defaults to holdTime
          onReorder={onReorder} // Callback when an item is dropped (you will need this to update your state)
          autoScroll={true} // Enable auto-scrolling when the pointer is close to the edge of the Reorder component (optional), defaults to true
          disabled={false} // Disable reordering (optional), defaults to false
          disableContextMenus={true} // Disable context menus when holding on touch devices (optional), defaults to true
          placeholder={
            <div className="custom-placeholder" /> // Custom placeholder element (optional), defaults to clone of dragged element
          }
        > */}
          {CardArray}
        {/* </Reorder> */}
      </Card>

    </Fade>
  )
}

