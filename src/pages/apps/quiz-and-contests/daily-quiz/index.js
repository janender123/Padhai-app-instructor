import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import { rows } from 'src/@fake-db/table/Questions-data'
import { DataGrid } from '@mui/x-data-grid'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarDailyQuiz'
import QuickSearchToolbarDestinationDailyQuiz from 'src/views/table/data-grid/QuickSearchToolbarDestinationDailyQuiz'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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

const SourceQuestionsTableFordailyQuiz = ({ setSelectedRows }) => {
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

  const getRowId = row => {   
    return row.id || row.index
  }

  return (
    <Card>
      <CardHeader title='Select Questions' />
      <DataGrid
        disableSelectionOnClick
        autoHeight
        columns={sourceColumns}
        pageSize={pageSize}
        onSelectionModelChange={newSelection => {
          setSelectedRows(newSelection)
        }}
        checkboxSelection
        rowsPerPageOptions={[7, 10, 25, 50]}
        components={{ Toolbar: QuickSearchToolbar }}
        rows={filteredData.length ? filteredData : data}
        getRowId={getRowId}
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

const destinationColumns = [
  {
    flex: 0.275,
    minWidth: 60,
    field: 'id',
    headerName: 'id',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {/* {params.row.id} */}
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
            {/* {row.question} */}
          </Typography>
        </Box>
      )
    }
  }
]

const DestinationTableFordailyQuiz = ({ selectedRows }) => {
  // ** States
  const [data, setData] = useState(selectedRows)
  const [pageSize, setPageSize] = useState(7)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setData(selectedRows)
    setFilteredData(selectedRows)
  }, [selectedRows])


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
      setFilteredData(data)
    }
  }

  const getRowId = row => {
    return row.id || row.index
  }

  return (
    <Card>
      <CardHeader title='Selected Questions' />
      <DataGrid
        disableSelectionOnClick
        autoHeight
        columns={destinationColumns}
        pageSize={pageSize}
        rowsPerPageOptions={[7, 10, 25, 50]}
        components={{ Toolbar: QuickSearchToolbarDestinationDailyQuiz }}
       rows={selectedRows.map((row, index) => ({ ...row, id: index + 1 }))}
      getRowId={data => data.id}
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

/* eslint-enable */
const DailyQuiz = () => {
  const [language, setLanguage] = useState('')
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [selectionModel, setSelectionModel] = useState([])

  const handleAddSelectedRows = () => {
    setSelectedRows([...selectedRows, ...rows.filter(row => selectionModel.includes(row.id))])
  }

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Apply Filter for Daily Quiz Questions' />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item sm={2.4} xs={12} mt={3}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
                    <Select
                      value={language}
                      onChange={e => setLanguage(e.target.value)}
                      label='Language'
                      id='demo-simple-select-outlined'
                      labelId='demo-simple-select-outlined-label'
                    >
                      <MenuItem value={10}>English</MenuItem>
                      <MenuItem value={20}>Hindi</MenuItem>
                      <MenuItem value={30}>Gujarati</MenuItem>
                      {/* <MenuItem value={30}>12th</MenuItem> */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2.4} mt={3}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-outlined-label'>Board</InputLabel>
                    <Select
                      value={category}
                      label='Board'
                      defaultValue=''
                      id='demo-simple-select-outlined'
                      labelId='demo-simple-select-outlined-label'
                      onChange={e => setCategory(e.target.value)}
                    >
                      <MenuItem value={10}>CBSE</MenuItem>
                      <MenuItem value={20}>ICSE</MenuItem>
                      <MenuItem value={30}>UP Board</MenuItem>
                      <MenuItem value={30}>MP Board</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2.4} mt={3}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-outlined-label'>Class</InputLabel>
                    <Select
                      value={subCategory}
                      label='Class'
                      defaultValue=''
                      id='demo-simple-select-outlined'
                      labelId='demo-simple-select-outlined-label'
                      onChange={e => setSubCategory(e.target.value)}
                    >
                      <MenuItem value={10}>6th</MenuItem>
                      <MenuItem value={20}>7th</MenuItem>
                      <MenuItem value={30}>8th</MenuItem>
                      <MenuItem value={30}>12th</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2.4} mt={3}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-outlined-label'>Stream</InputLabel>
                    <Select
                      value={childCategory}
                      label='Stream'
                      id='demo-simple-select-outlined'
                      labelId='demo-simple-select-outlined-label'
                      onChange={e => setChildCategory(e.target.value)}
                    >
                      <MenuItem value={10}>Science</MenuItem>
                      <MenuItem value={20}>Arts</MenuItem>
                      <MenuItem value={30}>Commerce</MenuItem>
                      {/* <MenuItem value={30}>12th</MenuItem> */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={2.4} xs={12} mt={3}>
                  <Button variant='contained' sx={{ mr: 2, mt: 2 }}>
                    Filter Questions
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={5.5}>
          <SourceQuestionsTableFordailyQuiz setSelectedRows={setSelectedRows} />
        </Grid>
        <Grid item sm={1} height={80} display='flex'>
          <Button variant='contained' sx={{ mr: 2, mt: 2 }} onClick={handleAddSelectedRows}>
            Add
            <Icon icon='material-symbols:chevron-right-sharp' />
          </Button>
        </Grid>
        <Grid item sm={5.5}>
          <DestinationTableFordailyQuiz selectedRows={selectedRows} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default DailyQuiz
