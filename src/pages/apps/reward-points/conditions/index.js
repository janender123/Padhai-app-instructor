import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import RewardPointsConditions from 'src/views/table/mui/RewardPointsConditions'

/* eslint-enable */
const UserList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Reward Points' />
            <RewardPointsConditions />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default UserList
