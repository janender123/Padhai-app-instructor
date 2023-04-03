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
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarNoticeBoard'

// ** Data Import
import { Button, Grid, TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { rows } from 'src/@fake-db/table/NoticeBoardListData'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
}

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const NoticeBoardTable = () => {
  // ** States
  const [dialogStates, setDialogStates] = useState(Array(rows.length).fill(false))
  const [data] = useState(rows)
  const [pageSize, setPageSize] = useState(7)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [show, setShow] = useState(false)

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
      minWidth: 400,
      field: 'title',
      headerName: 'Title',
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.title}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 200,
      field: 'sender',
      headerName: 'Sender',
      renderCell: params => {
        const { row } = params

        return (
          <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
            {row.sender}
          </Typography>
        )
      }
    },
    {
      flex: 0.125,
      field: 'message',
      minWidth: 100,
      renderCell: params => {
        const { row } = params
        const rowIndex = row.id

        return (
          <>
            <Button
              variant='outlined'
              onClick={() => {
                setShow(true)
                const newDialogStates = [...dialogStates]
                newDialogStates[rowIndex] = true
                setDialogStates(newDialogStates)
              }}
            >
              Show
            </Button>
            <Dialog
              f
              fullWidth
              open={show && dialogStates[rowIndex]}
              maxWidth='md'
              scroll='body'
              onClose={() => {
                const newDialogStates = [...dialogStates]
                newDialogStates[rowIndex] = false
                setDialogStates(newDialogStates)
              }}
            >
              <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
                <IconButton
                  size='small'
                  onClick={() => setShow(false)}
                  sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                >
                  <Icon icon='mdi:close' />
                </IconButton>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                  <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
                    Message
                  </Typography>
                </Box>
                <Grid container spacing={6}>
                  <Typography sx={{ mb: 3, lineHeight: '2rem' }}>{row.message}</Typography>
                </Grid>
              </DialogContent>
            </Dialog>
          </>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 200,
      field: 'type',
      headerName: 'Type',
      renderCell: params => {
        const { row } = params

        return (
          <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
            {row.type}
          </Typography>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'created_date',
      headerName: 'created date',
      renderCell: params => {
        const { row } = params

        return (
          <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
            {row.created_date}
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
        disableSelectionOnClick
        autoHeight
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
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

export default NoticeBoardTable
