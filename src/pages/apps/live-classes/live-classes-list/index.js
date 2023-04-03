// ** React Imports
import { useState, useEffect, forwardRef } from 'react'


// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LiveClassesTable from 'src/views/table/mui/LiveClassesTable'

/* eslint-enable */
const LiveClassesList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} lg={4}>
          <CardStatisticsHorizontal
            stats='Total Live Classes'
            title='8'
            icon={<Icon icon="material-symbols:video-camera-front" />}
          />
        </Grid>
        <Grid item xs={6} lg={4}>
          <CardStatisticsHorizontal
            stats='Pending live classes'
            title='0'
            icon={<Icon icon='ph:eye-bold' />}
          />
        </Grid>
        <Grid item xs={6} lg={4}>
          <CardStatisticsHorizontal
            stats='Inprogress live classes'
            title='3'
            icon={<Icon icon="ic:sharp-access-time" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Live Classes approved' />
            <LiveClassesTable />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default LiveClassesList
