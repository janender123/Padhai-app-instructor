// ** React Imports
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import DialogEditUserInfo from 'src/views/pages/dialog-examples/Add-Class-Dialog'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarCourses'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/CouponsListData'
import { Avatar } from '@mui/material'
import Image from 'next/dist/client/image'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <Image alt='avatar' src={`/images/avatars/${row.avatar}`} width={25} height={30} />
  } else {
    return <Typography sx={{ fontSize: '12px' }}>No Image</Typography>
  }
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
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 300 }}>
          {row.id}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 250,
    field: 'title',
    headerName: 'Title',
    renderCell: params => {
      const { row } = params

      return (
        <Typography
          noWrap
          variant='subtitle2'
          sx={{
            fontWeight: 300,
            color: 'text.primary',
            textDecoration: 'none'
          }}
        >
          {row.title}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'code',
    headerName: 'Code',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.code}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'user',
    headerName: 'User',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 400 }}>
          {row.user}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 130,
    field: 'created_date',
    headerName: 'Created date',
    renderCell: params => {
      return (
        <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
          {params.row.start_date}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 130,
    field: 'expiry_date',
    headerName: 'Expiry date',
    renderCell: params => {
      return (
        <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
          {params.row.expiry_date}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'usable_times',
    headerName: 'Usable Times',
    renderCell: params => {
      const { row } = params

      return (
        <Typography sx={{ mb: 3, lineHeight: '0.6rem' }}>
          <Box component='span' sx={{ ml: 10, lineHeight: '2rem', fontWeight: 'bold' }}>
            {row.usable_times}
          </Box>
         <br/>Remained : {row.remaining_times}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 110,
    field: 'percentage',
    headerName: 'Percentage',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 400 }}>
          {row.percentage}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 120,
    field: 'max_amount',
    headerName: 'Max Amount',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 400 }}>
          {row.max_amount}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'amount',
    headerName: 'Amount',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 400 }}>
          {row.amount}
        </Typography>
      )
    }
  },
   {
    flex: 0.275,
    minWidth: 130,
    field: 'minimum_order',
    headerName: 'Minimum Order',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 400 }}>
          {row.minimum_order}
        </Typography>
      )
    }
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
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete '>
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
              href: `/apps/forums/new`,
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

const CouponsList = () => {
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

export default CouponsList
