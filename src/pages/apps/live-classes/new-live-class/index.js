
import Grid from '@mui/material/Grid'
import NewLiveClassForm from 'src/views/forms/form-wizard/new-liveClass-form'

const InvoiceList = () => {
  return (
    <Grid container spacing={6}> <Grid item xs={12}>
      <NewLiveClassForm/>
    </Grid></Grid>
  )
}

export default InvoiceList