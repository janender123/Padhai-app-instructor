// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'
import DialogEditUserInfo from 'src/views/pages/dialog-examples/Add-Language-Dialog'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const QuickSearchToolbarDestinationDailyQuiz = props => {
  const { value, selectedRows, handleFilter } = props
  
return (

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
      <div>
        <TextField fullWidth label='Add Title for the quiz' sx={{ marginTop: '12px' }} />
      </div>
      <div>
        Select Date
        <TextField fullWidth type='datetime-local' />
      </div>
      {/* <DialogEditUserInfo/> */}
    </Box>
  )
}

export default QuickSearchToolbarDestinationDailyQuiz
