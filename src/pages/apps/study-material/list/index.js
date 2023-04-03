
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import StudyMaterialList from 'src/views/table/mui/StudyMaterialList'

/* eslint-enable */
const QuestionsList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Total Study Material'
            title='250'
            icon={<Icon icon="mdi:file-document" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Content approved' />
            <StudyMaterialList />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default QuestionsList
