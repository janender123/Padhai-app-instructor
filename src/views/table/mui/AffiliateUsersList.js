// ** React Imports
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/AffiliateUsersData'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
}

const statusObj = {
  1: { title: 'Active', color: 'primary' },
  2: { title: 'In Progress', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const columns = [
  {
    flex: 0.275,
    minWidth: 100,
    field: 'id',
    headerName: 'ID',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.id}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'user',
    headerName: 'User',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.user}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 200,
    field: 'role',
    headerName: 'Role',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.role}
        </Typography>
      )
    }
  },
  {
    flex: 0.125,
    field: 'reference_code',
    minWidth: 180,
    headerName: 'Reference Code',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.reference_code}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'registration_income',
    minWidth: 180,
    headerName: 'Registration Income',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.registration_income}
      </Typography>
    )
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'sales_commission',
    headerName: 'Sales Commission',
    renderCell: params => {
      const { row } = params

      return (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {row.sales_commission}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.status}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete'>
          <IconButton size='small' sx={{ mr: 0.5 }}>
            <Icon icon='mdi:delete-outline' />
          </IconButton>
        </Tooltip>
        <OptionsMenu
          iconProps={{ fontSize: 20 }}
          iconButtonProps={{ size: 'small' }}
          menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
          options={[
            {
              text: 'Edit',
              href: `/apps/invoice/edit/${row.id}`,
              icon: <Icon icon='mdi:pencil-outline' fontSize={20} />
            },
            {
              text: 'Duplicate',
              icon: <Icon icon='mdi:content-copy' fontSize={20} />
            }
          ]}
        />
      </Box>
    )
  }
]

const AffiliateUsersList = () => {
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

export default AffiliateUsersList
