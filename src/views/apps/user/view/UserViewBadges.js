// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import OutlinedInput from '@mui/material/OutlinedInput'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import BadgesTable from 'src/views/table/mui/BadgesTable'
import { MenuItem, Select } from '@mui/material'
import CardActions from 'src/pages/ui/cards/actions'
import CustomBadges from 'src/views/table/mui/CustomBadges'
import AutomaticBadges from 'src/views/table/mui/AutomaticBadges'

const UserViewBadges = () => {
  // ** States
  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-outlined-label'>Select a badge</InputLabel>
              <Select
                label='Select a badge'
                defaultValue=''
                id='demo-simple-select-outlined'
                labelId='demo-simple-select-outlined-label'
                placeholder='select a course'
              >
                <MenuItem value={10}>New User</MenuItem>
                <MenuItem value={20}>Loyal User</MenuItem>
                <MenuItem value={30}>Faithful User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant='contained'>Save</Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardHeader title='Custom Badges' />
              <CustomBadges />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardHeader title='Automatic Badges' />
              <AutomaticBadges />
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserViewBadges
