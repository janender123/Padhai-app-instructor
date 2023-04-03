// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** MUI Imports
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
import SessionsTable from 'src/views/table/mui/SessionsTable'
import { CardContent, Divider } from '@mui/material'
import AffiliateHistoryList from 'src/views/table/mui/AffiliateHistoryList'

/* eslint-enable */
const AffiliateHistory = () => {
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
      <Card>
        <CardHeader title='Referral History' />
        <Divider/>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={6} lg={4} sm={6}>
              <CardStatisticsHorizontal
                stats='Total Referred Users'
                title='8'
                icon={<Icon icon='ci:users' />}
              />
            </Grid>
            <Grid item xs={6} lg={4} sm={6}>
              <CardStatisticsHorizontal 
              stats='Total Affiliate Users' 
              title='2' 
              icon={<Icon icon='mdi:user-check-outline' />} />
            </Grid>
            <Grid item xs={6} lg={4} sm={6}>
              <CardStatisticsHorizontal
                stats='Total Registration Amount'
                title='₹ 1900'
                icon={<Icon icon='material-symbols:currency-rupee' />}
              />
            </Grid>
            <Grid item xs={6} lg={4} sm={6}>
              <CardStatisticsHorizontal
                stats='Total Commission Amount'
                title='₹ 1450'
                icon={<Icon icon='material-symbols:currency-rupee' />}
              />
            </Grid>

            <Grid item xs={12}>
              <Card>
                <AffiliateHistoryList />
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </DatePickerWrapper>
  )
}

export default AffiliateHistory
