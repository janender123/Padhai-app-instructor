// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import CourseBundleTable from 'src/views/table/mui/courseBundleTable'
import CourseNoticesTable from 'src/views/table/mui/courseNoticesTable'
import CourseComments from 'src/views/table/mui/CourseComments'
import BundleComments from 'src/views/table/mui/BundleComments'

/* eslint-enable */
const CourseNoticesList = () => {
  // ** State
  const [dates, setDates] = useState([])
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [statusValue, setStatusValue] = useState('')
  const [endDateRange, setEndDateRange] = useState(null)
  const [selectedRows, setSelectedRows] = useState([])
  const [startDateRange, setStartDateRange] = useState(null)

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)
  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = val => {
    setValue(val)
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates
    if (start !== null && end !== null) {
      setDates(dates)
    }
    setStartDateRange(start)
    setEndDateRange(end)
  }

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} lg={3}>
          <CardStatisticsHorizontal
            stats='Total Comments'
            title='18'
            icon={<Icon icon='tabler:message-circle' />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CardStatisticsHorizontal
            stats='Published Comments'
            title='16'
            icon={<Icon icon='ph:eye-bold' />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CardStatisticsHorizontal
            stats='Pending Comments'
            title='2'
            icon={<Icon icon='ic:sharp-access-time' />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CardStatisticsHorizontal
            stats='Comment Reports'
            title='1'
            icon={<Icon icon='ph:flag' />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Comments' />
            <BundleComments />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default CourseNoticesList
