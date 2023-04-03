// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormLayoutsBasic from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionSimple = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id='panel-header-1'
          aria-controls='panel-content-1'
          expandIcon={<Icon icon='mdi:chevron-down' />}
        >
          <Typography>What is Light?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormLayoutsBasic />
        </AccordionDetails>
      </Accordion>

      <Accordion>
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

      <Accordion>
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
    </div>
  )
}

export default AccordionSimple
