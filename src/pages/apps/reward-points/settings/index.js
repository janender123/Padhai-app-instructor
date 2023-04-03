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
import { styled } from '@mui/material/styles'
import { useState } from 'react'

// ** Source code imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const Index = () => {
    
  const [invisible, setInvisible] = useState(false)

  const handlePointsConversion = () => {
    setInvisible(!invisible)
  }

  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='Reward Points Settings' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultChecked />} label='Active' />
                <Typography variant='body2'>
                  By activating this feature, the system will calculate point rewards based on user actions
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label='Points conversion'
                  onChange={handlePointsConversion}
                />
                <Typography variant='body2'>
                  Enable this feature to allow users to convert their point rewards to the wallet charge
                </Typography>
              </Grid>
              {!invisible && (
                <Grid item mt={3} sm={12} xs={12}>
                  <TextField id='points' type='number' label='Points Conversion' fullWidth />
                  <Typography variant='body2'>
                    The user will get 1 currency unit for this amount of points. e.g. if you enter 5, the user will get
                    Rs. 1 for each 5 points
                  </Typography>
                </Grid>
              )}
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

export default Index
