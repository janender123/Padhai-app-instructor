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
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarCourses'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/AffiliateHistoryData'

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
    field: 'affiliate_user',
    headerName: 'Affiliate User',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.affiliate_user}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 200,
    field: 'referred_user',
    headerName: 'Referred User',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.referred_user}
        </Typography>
      )
    }
  },
  {
    flex: 0.125,
    field: 'reg_bonus',
    minWidth: 180,
    headerName: 'Affiliate Registration Bonus',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.reg_bonus}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'commission',
    minWidth: 80,
    headerName: 'Affiliate Commission',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.commission}
      </Typography>
    )
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'user_bonus',
    headerName: 'Referred User Bonus',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.user_bonus}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'date',
    headerName: 'Date',
    renderCell: params => {
      const { row } = params

      return (
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {row.start_date}
        </Typography>
      )
    }
  } 
]

const AffiliateHistoryList = () => {
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

export default AffiliateHistoryList
