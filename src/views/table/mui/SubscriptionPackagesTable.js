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
import DialogEditUserInfo from 'src/views/pages/dialog-examples/Add-Class-Dialog'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/SubscriptionPackagesData'
import { Avatar } from '@mui/material'
import Image from 'next/dist/client/image'

// ** renders client column

const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <Image alt='avatar' src={`/images/avatars/${row.avatar}`} width={35} height={40} />

  } else {
    return (
      <Typography sx={{ fontSize: '12px' }}>No Image</Typography>
    )
  }
}

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const columns = [
  {
    flex: 0.275,
    minWidth: 60,
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
    minWidth: 100,
    field: 'icon',
    headerName: 'Icon',
    renderCell: params => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
        </Box>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'title',
    headerName: 'Title',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.title}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'price',
    headerName: 'Price(in ₹)',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.price}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'users',
    headerName: 'Users',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.subscribe_times}
        </Typography>
      )
    }
  },
  {
    flex: 0.125,
    field: 'days',
    minWidth: 80,
    headerName: 'Days',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.days}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'sales',
    minWidth: 80,
    headerName: 'Sales',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.sales}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'popular_badge',
    minWidth: 150,
    headerName: 'Popular Badge',
    renderCell: params => (
      <Typography variant='body2' color={params.row.status_color} >
        {params.row.popular_badge}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'unlimited_use',
    minWidth: 150,
    headerName: 'Unlimited Use',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.unlimited_use}
      </Typography>
    )
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'created_date',
    headerName: 'Created Date',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.start_date}
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
        <Tooltip title='delete'>
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

const SubscriptionPackagesTable = () => {
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

        // components={{ Toolbar: QuickSearchToolbar }}
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

export default SubscriptionPackagesTable
