
import TableBoards from 'src/views/table/mui/BoardTable'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useSettings } from 'src/@core/hooks/useSettings'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import RechartsLineChart from 'src/views/charts/recharts/RechartsLineChart'
import TotalRevenueGraph from 'src/views/charts/recharts/TotalRevenueGraph'
import NetProfitStatsGraph from 'src/views/charts/recharts/NetProfitStatsGraph'
import UsersList from 'src/views/table/mui/UsersTable'

const BoardsList = () => {

  const { settings } = useSettings()
  
return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Users Subscription'
            title='8'
            icon={<Icon icon='mdi:account-outline' />}

          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Active Coupons'
            title='4'
            icon={<Icon icon='mdi:coupon-outline' />}

          />
        </Grid>
        <Grid item xs={12}>
          <TotalRevenueGraph direction={settings.direction} />
        </Grid>
        <Grid item xs={12}>
          <NetProfitStatsGraph direction={settings.direction} />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Most active Students' />
            <UsersList />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default BoardsList
