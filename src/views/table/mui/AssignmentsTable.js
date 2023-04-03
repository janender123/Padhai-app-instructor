// ** React Imports
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import OptionsMenu from 'src/@core/components/option-menu'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import DialogEditUserInfo from 'src/views/pages/dialog-examples/Add-Board-Dialog'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarCourses'

// ** Utils Import

import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import CorrectAnswer from 'src/views/forms/form-elements/switch/CorrectAnswer'
import { Divider } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet-quiz-answers'
import * as source from 'src/views/forms/form-elements/checkbox/CheckboxesSourceCode'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import SwitchesCustomizedStatus from 'src/views/forms/form-elements/switch/SwitchesCustomized'

// ** Data Import
import { rows } from 'src/@fake-db/table/assignments-data'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <Typography sx={{ fontSize: '12px' }}>No Image</Typography>
    )
  }
}

const statusObj = {
  1: { title: 'Active', color: 'primary' },
  2: { title: 'Inactive', color: 'error' }
}

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const columns = [
  {
    flex: 0.275,
    minWidth: 60,
    field: 'id',
    headerName: 'id',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {params.row.id}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 200,
    field: 'title',
    headerName: 'title',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600, textTransform:'capitalize' }}>
          {params.row.title}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'language_name',
    headerName: 'Language Name',
    renderCell: params => {
      return (
        <Typography  noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600,textTransform:'capitalize'}}>
          {params.row.language}
        </Typography>
      )
    }
  },
  {
    flex: 0.125,
    field: 'Board',
    minWidth: 150,
    headerName: 'board',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.board}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Class',
    minWidth: 80,
    headerName: 'Class',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.class}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'stream',
    minWidth: 100,
    headerName: 'stream',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary',textTransform:'capitalize' }}>
        {params.row.stream}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'students',
    minWidth: 100,
    headerName: 'students',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.students}
      </Typography>
    )
  }, {
    flex: 0.125,
    field: 'grade',
    minWidth: 100,
    headerName: 'grade',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.grade}
      </Typography>
    )
  }, {
    flex: 0.125,
    field: 'passgrade',
    minWidth: 100,
    headerName: 'pass grade',
    renderCell: params => (
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.pass_grade}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 140,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' color={row.status_color} sx={{ fontWeight: 600 }}>
          {row.status}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 120,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete Question'>
          <IconButton size='small' sx={{ mr: 0.5 }} onClick={() => ''}>
            <Icon icon='mdi:delete-outline' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Edit Question'>
        <IconButton size='small' sx={{ mr: 0.5 }} onClick={() => ''}>
            <Icon icon='mdi:edit-outline' />
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
]

const AssignmentsTable = () => {
  // ** States
  const [data] = useState(rows)
  const [pageSize, setPageSize] = useState(7)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleSearch = searchValue => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')

    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  return (
    <Card>
      <DataGrid
        autoHeight
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
         disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        components={{ Toolbar: QuickSearchToolbar }}
        rows={filteredData.length ? filteredData : data}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        componentsProps={{
          baseButton: {
            variant: 'outlined'
          },
          toolbar: {
            value: searchText,
            clearSearch: () => handleSearch(''),
            onChange: event => handleSearch(event.target.value)
          }
        }}
      />

    </Card>
  )
}

export default AssignmentsTable
