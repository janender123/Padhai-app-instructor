// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TeacherViewLeft from './TeacherViewLeft'
import TeacherViewRight from './TeacherViewRight'

const TeacherView = ({ tab, invoiceData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} lg={4}>
        <TeacherViewLeft />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <TeacherViewRight tab={tab} invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default TeacherView
