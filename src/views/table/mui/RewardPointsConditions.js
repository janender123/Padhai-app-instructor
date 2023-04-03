// ** React Imports
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'

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
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarRewardPointsConditions'

// ** Data Import
import { rows } from 'src/@fake-db/table/RewardPointsConditionsData'
import OptionsMenu from 'src/@core/components/option-menu'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return <Typography sx={{ fontSize: '12px' }}>No Image</Typography>
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
    minWidth: 50,
    maxWidth: 100,
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
    minWidth: 250,
    maxWidth: 350,
    field: 'title',
    headerName: 'Title',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {params.row.title}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 120,
    maxWidth: 200,
    field: 'point_reward',
    headerName: 'Point Reward',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {params.row.point_reward}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 120,
    maxWidth: 200,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' color={params.row.color} sx={{ fontSize: '12px', fontWeight: 600 }}>
          {params.row.status}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'created_date',
    headerName: 'Created date',
    renderCell: params => {
      return (
        <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
          {params.row.created_date}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 115,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => handleEditPermission(row.name)}>
          <Icon icon='mdi:pencil-outline' />
        </IconButton>
        <IconButton>
          <Icon icon='mdi:delete-outline' />
        </IconButton>
      </Box>
    )
  }
]

const RewardPointsConditions = () => {
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
        rowsPerPageOptions={[7, 10, 25, 50]}
        rows={filteredData.length ? filteredData : data}
        components={{ Toolbar: QuickSearchToolbar }}
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

export default RewardPointsConditions
