import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider, FormControlLabel, Switch, Typography } from '@mui/material'
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
          <CardHeader title='New Support Ticket' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <TextField type='text' label='Title' placeholder='Title' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='department-select'>Department</InputLabel>
                  <Select
                    fullWidth
                    id='department-role'
                    label='Department'
                    labelId='department-select'
                    inputProps={{ placeholder: 'Select department' }}
                  >
                    <MenuItem value='Finance'>Finance</MenuItem>
                    <MenuItem value='Marketing'>Marketing</MenuItem>
                    <MenuItem value='Content'>Content</MenuItem>
                    <MenuItem value='Technical'>Technical</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='user-select'>Users</InputLabel>
                  <Select
                    fullWidth
                    id='select-user'
                    label='Users'
                    labelId='user-select'
                    inputProps={{ placeholder: 'Select user' }}
                  >
                    <MenuItem  value='10'>Yogesh Kumar</MenuItem>
                    <MenuItem value='20' >Deepak Kumar</MenuItem>
                    <MenuItem value='30' >Abhishek Verma</MenuItem>
                    <MenuItem value='40' >Ankit Tomar</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12}>
                <EditorWrapper>
                  <CardSnippet
                    sx={{ overflow: 'visible' }}
                    title='Description'
                    code={{
                      tsx: null,
                      jsx: source.EditorControlledJSXCode
                    }}
                  >
                    <EditorControlled />
                  </CardSnippet>
                </EditorWrapper>
              </Grid>
              <Grid item xs={12}>
                <Typography >Attachments</Typography>
                <TextField fullWidth type='file' ></TextField>
              </Grid>
              <CardActions>
                <Button size='large' type='submit' sx={{ marginTop: '20px' }} variant='contained'>
                  Send
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
