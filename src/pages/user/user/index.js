
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import InstructorsTable from 'src/views/table/mui/InstructorsTable'
import UsersList from 'src/views/table/mui/UsersTable'

/* eslint-enable */
const UserList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}  lg={3} sm={6} >
          <CardStatisticsHorizontal
            stats='Total Users'
            title='250'
            icon={<Icon icon="mdi:teacher" />}
          />
        </Grid>
        <Grid item xs={6}  lg={3} sm={6}>
          <CardStatisticsHorizontal
            stats='Inactive Users'
            title='25'
            icon={<Icon icon="carbon:information-disabled" />}
          />
        </Grid>
        <Grid item xs={6}  lg={3} sm={6}>
          <CardStatisticsHorizontal
            stats='Pending Users'
            title='20'
            icon={<Icon icon="mdi:account-pending" />}
          />
        </Grid>
        <Grid item xs={6}  lg={3} sm={6}>
          <CardStatisticsHorizontal
            stats='Banned Users'
            title='0'
            icon={<Icon icon="mdi:ban" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Users approved' />
            <UsersList />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default UserList
