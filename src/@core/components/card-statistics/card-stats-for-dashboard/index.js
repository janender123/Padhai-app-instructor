// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { styled } from '@mui/material/styles'

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: -1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 0,
  bottom: 0,
  width: 98,
  height: 160,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 80,
    position: 'static'
  }
}))

const CardStatsForDashboard = ({ data }) => {
  // ** Vars
  const { title, chipText, src, stats, trendNumber, trend = 'positive', chipColor } = data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative', height: '250px', padding: '32px 0.5px 15px 1px' }}>
       <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} m='2px' p='2px'>
            <Typography sx={{ fontSize: '1rem', fontWeight: 250, whiteSpace: 'nowrap' }}>
              {title}
              <Box sx={{ fontWeight: 'bold' }}>{stats}</Box>
            </Typography>
          </Grid>

          <StyledGrid item xs={12} sm={6}>
            <Img src={src} alt={title} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardStatsForDashboard
