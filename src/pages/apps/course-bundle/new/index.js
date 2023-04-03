
import Grid from '@mui/material/Grid'
import NewCourseBundleForm from 'src/views/forms/form-wizard/new-course-bundle-form'

const InvoiceList = () => {

    return (
        <Grid container spacing={6}> <Grid item xs={12}>
            <NewCourseBundleForm />
        </Grid></Grid>

    )
}

export default InvoiceList
