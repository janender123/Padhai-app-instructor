// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { MenuItem, Select } from '@mui/material'

const TeacherFinancialForm = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <CardHeader title='Account Information' />
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-outlined-label'>Select Bank</InputLabel>
              <Select
                label='Select Bank'
                id='demo-simple-select-outlined'
                labelId='demo-simple-select-outlined-label'
              >
                <MenuItem value={10}>State Bank of India</MenuItem>
                <MenuItem value={20}>ICICI Bank</MenuItem>
                <MenuItem value={30}>HDFC Bank</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor='form-layouts-basic-password'>Account Number</InputLabel>
              <OutlinedInput
                label='Account Number'
                id='form-layouts-basic-password'
                type={values.showPassword ? 'text' : 'password'}
                aria-describedby='form-layouts-basic-password-helper'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor='form-layouts-confirm-password'>Confirm Account Number</InputLabel>
              <OutlinedInput
                label='Confirm Account Number'
                value={confirmPassValues.password}
                id='form-layouts-confirm-password'
                onChange={handleConfirmPassChange('password')}
                aria-describedby='form-layouts-confirm-password-helper'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='IFSC Code' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Nickname (optional)' />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                gap: 5,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button type='submit' variant='contained' size='large'>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default TeacherFinancialForm
