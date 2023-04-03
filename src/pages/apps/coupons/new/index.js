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
import { Divider, FormControlLabel, MenuItem, Select, Switch } from '@mui/material'
import { date } from 'yup/lib/locale'

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
      <Card>
        <CardHeader title='New Discount' />
        <Divider />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TextField fullWidth label='Title' placeholder='Title' />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Discount type</InputLabel>
                <Select
                  label='Discount type'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>Percentage</MenuItem>
                  <MenuItem value={20}>Fixed Amount</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'> Source </InputLabel>
                <Select label='Source' id='demo-simple-select-outlined' labelId='demo-simple-select-outlined-label'>
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Course</MenuItem>
                  <MenuItem value={30}>Course Bundles</MenuItem>
                  <MenuItem value={40}>Category</MenuItem>
                  <MenuItem value={50}>Meeting</MenuItem>
                  <MenuItem value={60}>Store Products</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'> Users </InputLabel>
                <Select label='Users' id='demo-simple-select-outlined' labelId='demo-simple-select-outlined-label'>
                  <MenuItem value={20}>Instructor</MenuItem>
                  <MenuItem value={30}>User</MenuItem>
                  <MenuItem value={40}>Instructor + User</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Discount Percentage</InputLabel>
                <OutlinedInput
                  label='Discount Percentage'
                  id='form-layouts-basic-password'
                  type='number'
                  placeholder='Discount Percentage'
                  aria-describedby='form-layouts-basic-password-helper'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton edge='start' aria-label='toggle password visibility'>
                        <Icon icon='mdi:percent' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Max Amount</InputLabel>
                <OutlinedInput
                  label='Max Amount'
                  id='form-layouts-basic-password'
                  type='number'
                  placeholder='Maximum Coupon Amount For An Order '
                  aria-describedby='form-layouts-basic-password-helper'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton edge='start' aria-label='toggle password visibility'>
                        <Icon icon='mdi:rupee' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Minimum Order</InputLabel>
                <OutlinedInput
                  label='Minimum Order'
                  id='form-layouts-basic-password'
                  type='number'
                  placeholder='Minimum Order Required To Avail Discount'
                  aria-describedby='form-layouts-basic-password-helper'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton edge='start' aria-label='toggle password visibility'>
                        <Icon icon='mdi:rupee' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Usable Times</InputLabel>
                <OutlinedInput
                  label='Usable Times'
                  id='form-layouts-basic-password'
                  type='number'
                  aria-describedby='form-layouts-basic-password-helper'
                  placeholder='Maximum Times That The Coupon Could Be Used'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton edge='start' aria-label='toggle password visibility'>
                        <Icon icon='mdi:users' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Coupon' />
              <Typography variant='body2'>Users will use this code to get a discount (E.g. MERRY_CHRISTMAS)</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Expiry Date
</InputLabel>
                <OutlinedInput
                  label='Expiry Date'
                  id='form-layouts-basic-password'
                  type='date'
                  aria-describedby='form-layouts-basic-password-helper'
  value={new Date().toISOString().slice(0, 10)} // set the value to today's date in YYYY-MM-DD format
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton edge='start' aria-label='toggle password visibility'>
                        <Icon icon='mdi:calendar' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultChecked />} label='Apply only for the first purchase' />
                <Typography variant='body2'>
                 By activating this option, the code will be valid for the user's first purchase
                </Typography>
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
      </Card>
    </>
  )
}

export default TeacherFinancialForm
