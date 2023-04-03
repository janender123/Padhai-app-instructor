
import TableBoards from 'src/views/table/mui/BoardTable'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

const BoardsList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Boards'
            title='78'
            icon={<Icon icon='mdi:human-male-board-poll' />}

          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Total Exams'
            title='4'
            icon={<Icon icon='healthicons:i-exam-multiple-choice-outline' />}

          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Boards approved' />
            <TableBoards />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default BoardsList
