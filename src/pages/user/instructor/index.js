
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import InstructorsTable from 'src/views/table/mui/InstructorsTable'

/* eslint-enable */
const InstructorList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <CardStatisticsHorizontal
            stats='Total Instructors'
            title='250'
            icon={<Icon icon="mdi:teacher" />}
          />
        </Grid>
        <Grid item xs={4}>
          <CardStatisticsHorizontal
            stats='Inactive Instructors'
            title='25'
            icon={<Icon icon="carbon:information-disabled" />}
          />
        </Grid>
        <Grid item xs={4}>
          <CardStatisticsHorizontal
            stats='Banned Instructors'
            title='0'
            icon={<Icon icon="mdi:ban" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Instructors approved' />
            <InstructorsTable />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default InstructorList
