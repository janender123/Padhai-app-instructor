// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'
import DialogEditUserInfo from 'src/views/pages/dialog-examples/Add-Class-Dialog'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import SendCourseNoticeDialog from 'src/views/pages/dialog-examples/SendCourseNoticeDialog'
import { Button } from '@mui/material'

const QuickSearchToolbarCourseNotices = props => {
  const { value, selectedRows, handleFilter } = props
  
return (
    <>
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: theme => theme.spacing(2, 5, 4, 5)
        }}
      >

        <Select
          size='small'
          displayEmpty
          defaultValue=''
          sx={{ mr: 2, mb: 2 }}
          disabled={selectedRows && selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'Actions' : selected)}
        >
          <MenuItem disabled>Actions</MenuItem>
          <MenuItem value='Delete'>Delete</MenuItem>
          <MenuItem value='Edit'>Edit</MenuItem>
        </Select>


        <TextField
          size='small'
          value={props.value}
          onChange={props.onChange}
          placeholder='Search…'

          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 2, display: 'flex' }}>
                <Icon icon='mdi:magnify' fontSize={20} />
              </Box>
            ),
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
                <Icon icon='mdi:close' fontSize={20} />
              </IconButton>
            )
          }}
          sx={{
            float: 'right',

            // display: 'flex',flexWrap: 'wrap', alignItems: 'center',
            mr: 5,
            width: {
              xs: 1,
              sm: 'auto'
            },
            '& .MuiInputBase-root > svg': {
              mr: 2
            }
          }}
        />
        <GridToolbarFilterButton placement='top-start' sx={{ float: 'right', mt: '3px' }} />
        <Button variant='contained' onClick={() => (window.location.href = '/apps/course-notices/new')}>
         Send a Notice
        </Button>
      </Box>
    </>
  )
}

export default QuickSearchToolbarCourseNotices
