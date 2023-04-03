
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'

/* eslint-enable */
const LanguageList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Languages'
            title='8'
            icon={<Icon icon='ic:outline-translate' />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Languages approved' />
            <LanguageTable />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default LanguageList
