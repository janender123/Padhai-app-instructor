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
import { styled } from '@mui/material/styles'

// ** Source code imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const index = () => {
  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='New Subscription Package' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={6} mt={3}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
                  <Select label='Language' id='demo-simple-select-outlined' labelId='demo-simple-select-outlined-label'>
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Hindi</MenuItem>
                    <MenuItem value={30}>Gujarati</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField type='text' label='Title' placeholder='Title' fullWidth />
              </Grid>
              <Grid item sm={12}>
                <EditorWrapper>
                  <CardSnippet
                    sx={{ overflow: 'visible' }}
                    title='Description (optional)'
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
                <TextField type='number' label='Users' placeholder='Users' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField type='number' label='Days' placeholder='Days' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField type='number' label='Price(in ₹)' placeholder='Price' fullWidth />
              </Grid>
              <Grid item sm={12} xs={12}>
                Upload Icon
                <TextField
                  type='file'
                  fullWidth
                  InputProps={{
                    inputProps: { accept: 'image/png, image/jpeg' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultUnChecked />} label='Popular Badge' />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultUnChecked />} label='Unlimited use' />
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
