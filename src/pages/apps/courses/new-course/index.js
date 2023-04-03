
import Grid from '@mui/material/Grid'
import NewCourseForm from 'src/views/forms/form-wizard/new-course-form'

const NewCourse = () => {

  return (
    <Grid container spacing={6}> <Grid item xs={12}>
      <NewCourseForm/>
    </Grid></Grid>

  )
}

export default NewCourse
