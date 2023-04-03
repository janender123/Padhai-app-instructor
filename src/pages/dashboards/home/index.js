// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

import CardStatisticsForDashboard from 'src/views/ui/cards/statistics/CardStatisticsForDashboard'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import ChartjsBarChart from 'src/views/charts/chartjs/ChartjsBarChart'
import Icon from 'src/@core/components/icon'
import { useTheme } from '@mui/material/styles'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import MonthlyRegisteredUsers from 'src/views/charts/chartjs/MonthlyRegisteredUsers'
import ChartjsAreaChart from 'src/views/charts/chartjs/ChartjsAreaChart'
import TotalSubscribersChart from 'src/views/charts/chartjs/TotalSubscribersChart'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import UserDistributionChart from 'src/views/dashboards/crm/UserDistributionChart'
import CardStatisticsVertical, { CardStatsHomeCategories } from 'src/@core/components/card-statistics/card-stats-vertical'
import ApexDonutChart, { CourseNoticeChart } from 'src/views/charts/apex-charts/ApexDonutChart'
import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'
import CrmTable from 'src/views/dashboards/crm/CrmTable'
import UserTable from 'src/views/dashboards/crm/UserTable'
import RecentSupportTickets from 'src/views/dashboards/crm/RecentSupportTickets'

const CardStatistics = ({ apiData }) => {
  const theme = useTheme()
  const whiteColor = '#fff'
  const areaChartBlue = '#2c9aff'
  const barChartYellow = '#ffcf5c'
  const areaChartBlueLight = '#84d0ff'
  const areaChartGreyLight = '#edf1f4'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardStatisticsForDashboard data={apiData.statsDashboard} />
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+38%'
              chipText='78'
              title='Boards'
              icon={<Icon icon='cil:education' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+18%'
              chipText='123'
              title='Classes'
              icon={<Icon icon='fluent:class-24-regular' />}
            />
          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+3%'
              chipText='39'
              title='Streams'
              icon={<Icon icon='cil:stream' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+12%'
              chipText='8'
              title='Languages'
              icon={<Icon icon='material-symbols:keyboard-previous-language-outline-sharp' />}
            />
          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+8%'
              chipText='28'
              title='Courses'
              icon={<Icon icon='fluent-mdl2:publish-course' />}
            />

          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+2%'
              chipText='8'
              title='Course Bundles'
              icon={<Icon icon='academicons:coursera' />}
            />
          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+21%'
              chipText='178'
              title='Live Classes'
              icon={<Icon icon='material-symbols:video-camera-back-outline-sharp' />}
            />
          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+19%'
              chipText='68'
              title='Total Contests'
              icon={<Icon icon='ic:outline-share-arrival-time' />}
            />
          </Grid><Grid item xs={6} sm={3} md={4}>
            <CardStatsHomeCategories
              color='primary'
              trendNumber='+38%'
              chipText='278'
              title='Study Materials'
              icon={<Icon icon='arcticons:kanji-study' />}
            />
          </Grid>
          <Grid item xs={12} md={6} >
            <MonthlyRegisteredUsers
              yellow={barChartYellow}
              labelColor={labelColor}
              borderColor={borderColor}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TotalSubscribersChart
              white={whiteColor}
              blue={areaChartBlue}
              labelColor={labelColor}
              borderColor={borderColor}
              legendColor={legendColor}
              blueLight={areaChartBlueLight}
              greyLight={areaChartGreyLight}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UserDistributionChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <CourseNoticeChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentSupportTickets />
          </Grid>
          <Grid item xs={12} md={8}>
            <UserTable />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
