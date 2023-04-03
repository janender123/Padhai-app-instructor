// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

const ScheduleSession = ({ popperPlacement }) => {
  // ** States
  const [time, setTime] = useState(new Date())

  return (
    <div style={{ display: 'flex' }}>
      <Box sx={{ width: '100% !important', display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
        <DatePicker
          style={{ width: '100% !important' }}
          timeIntervals='60'
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 0), 21)}
          minDate={new Date()}
          customInput={<CustomInput label='Schedule a 1 hour session' />}
        />
      </Box>
    </div>
  )
}

export default ScheduleSession
