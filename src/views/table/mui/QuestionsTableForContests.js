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
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbarQuestionsList'

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
import { rows } from 'src/@fake-db/table/Questions-data-for-contests'

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

const AnswerOption = () => {
  const [visible, setVisible] = useState(true)

  const removeElement = () => {
    setVisible(prev => !prev)
  }

  return (
    <>
      {visible && (
        <Grid item sm={12} xs={12}>
          <CardHeader action={<Icon icon='mdi:close' fontSize={20} onClick={removeElement} />} />
          <CardSnippet
            title=''
            code={{
              tsx: null
            }}
          >
            <Grid item sm={12} xs={12} mt={3}>
              <TextField id='name' required fullWidth label='Write your answer here...' />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              Answer Image (optional)
              <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              <SwitchesCustomized />
            </Grid>
          </CardSnippet>
        </Grid>
      )}
    </>
  )
}

const EditQuestion = () => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [answerOptionList, setAnswerOptionList] = useState([])

  const onAddBtnClick = () => {
    setAnswerOptionList(answerOptionList.concat(<AnswerOption key={answerOptionList.length} />))
  }
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  return (
    <>
      <IconButton size='small' sx={{ mr: 0.5 }} onClick={() => ''}>
        <Icon icon='mdi:pencil-outline' fontSize={20} onClick={() => setShow(true)} />
      </IconButton>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}

        // TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <CardHeader title='Edit Question' />
          <Divider sx={{ m: '0 !important' }} />
          <form onSubmit={e => e.preventDefault()}>
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12} mt={3}>
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
              <Grid item xs={12} sm={6} mt={3}>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item sm={12} xs={6} mt={3}>
                <TextField id='name' fullWidth label='Write your question here...' required />
              </Grid>
              <Grid item sm={12} xs={12}>
                Image (Optional)
                <TextField
                type='file'
                fullWidth
                InputProps={{
                  inputProps: { accept: 'image/png, image/jpeg' }
                }}
              />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Divider textAlign='left'>Answers</Divider>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button variant='contained' onClick={onAddBtnClick}>
                  Add Answer
                </Button>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CardSnippet
                  title=''
                  code={{
                    tsx: null
                  }}
                >
                  <Grid item sm={12} xs={12} mt={3}>
                    <TextField id='name' required fullWidth label='Write your answer here...' />
                  </Grid>
                  <Grid item mt={3} sm={12} xs={12}>
                    Answer Image (optional)
                    <TextField
                      type='file'
                      fullWidth
                      InputProps={{
                        inputProps: { accept: 'image/png, image/jpeg' }
                      }}
                    />
                  </Grid>
                  <Grid item mt={3} sm={12} xs={12}>
                    <SwitchesCustomized />
                  </Grid>
                </CardSnippet>
              </Grid>
              {answerOptionList}
            </Grid>
          </form>
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
            Submit
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => setShow(false)}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
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
    minWidth: 150,
    field: 'language_name',
    headerName: 'Language Name',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {params.row.language_name}
        </Typography>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 150,
    field: 'contest_name',
    headerName: 'Contest Name',
    renderCell: params => {
      return (
        <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
          {params.row.contest_name}
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
      <Typography variant='body2' sx={{ fontSize: '12px', color: 'text.primary' }}>
        {params.row.stream}
      </Typography>
    )
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'image',
    headerName: 'Image',
    renderCell: params => {
      return <Box sx={{ display: 'flex', alignItems: 'center' }}>{renderClient(params)}</Box>
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
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'option-a',
    headerName: 'Option A',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
            {row.optiona}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'option-b',
    headerName: 'Option B',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
            {row.optionb}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'option-c',
    headerName: 'Option C',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
            {row.optionc}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.275,
    minWidth: 100,
    field: 'option-d',
    headerName: 'Option D',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body2' sx={{ fontSize: '12px', color: 'text.primary', fontWeight: 600 }}>
            {row.optiond}
          </Typography>
        </Box>
      )
    }
  },

  {
    flex: 0.175,
    minWidth: 120,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      const status = statusObj[params.row.status]

      return (
        <CustomChip
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
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
          <EditQuestion />
        </Tooltip>
      </Box>
    )
  }
]

const QuestionsTableForContests = () => {
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

export default QuestionsTableForContests
