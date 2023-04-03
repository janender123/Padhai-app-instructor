// ** React Imports
import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarQuestionsList'

// ** Data Import
import { rows } from 'src/@fake-db/table/Questions-data'

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const sourceColumns = [
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
    minWidth: 500,
    field: 'question',
    headerName: 'Question',
    renderCell: params => {
      const { row } = params
      
return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 100 }}>
            {row.question}
          </Typography>
        </Box>
      )
    }
  }
]

const SourceQuestionsTableFordailyQuiz = () => {
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
      <CardHeader title='Select Questions' />
      <DataGrid
        autoHeight
        columns={sourceColumns}
        pageSize={pageSize}
         disableSelectionOnClick
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

export default SourceQuestionsTableFordailyQuiz
