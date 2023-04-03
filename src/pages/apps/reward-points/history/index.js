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
import RewardPointsHistory from 'src/views/table/mui/RewardPointsHistory'

/* eslint-enable */
const UserList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Reward Points' />
            <RewardPointsHistory />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default UserList
