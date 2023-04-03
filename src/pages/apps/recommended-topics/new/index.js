import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider, FormControlLabel, Switch } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// ** Source code imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const index = () => {
  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='New Recommended Topic' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <TextField fullWidth label='Title' />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='role-select'>Select Topic</InputLabel>
                  <Select
                    fullWidth
                    id='select-role'
                    label='Select Role'
                    labelId='role-select'
                    inputProps={{ placeholder: 'Select Role' }}
                  >
                    <MenuItem value='admin'>What is social media ?</MenuItem>
                    <MenuItem value='user'>Who is Narendra Modi?</MenuItem>
                    <MenuItem value='instructor'>What is the effect of running?</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                Icon
                <TextField type='file' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultChecked />} label='Active' />
              </Grid>
              <CardActions>
                <Button size='large' type='submit' sx={{ marginTop: '20px' }} variant='contained'>
                  Save
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </Card>
      </EditorWrapper>
    </DatePickerWrapper>
  )
}

export default index
