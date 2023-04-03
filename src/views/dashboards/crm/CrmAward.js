// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Styled component for the trophy image
const TrophyImg = styled('img')(({ theme }) => ({
  right: 22,
  bottom: 0,
  width: 106,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 95
  }
}))

const CrmAward = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>
          Congratulations{' '}
          <Box component='span' sx={{ fontWeight: 'bold' }}>
            Norris
          </Box>
          ! 🎉
        </Typography>
        <Typography variant='body2' sx={{ mb: 3.25 }}>
          Best seller of the month
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: 600, color: 'primary.main' }}>
          $42.8k
        </Typography>
        <Typography variant='body2' sx={{ mb: 3.25 }}>
          78% of target 🤟🏻
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TrophyImg alt='trophy' src='/images/cards/trophy.png' />
      </CardContent>
    </Card>
  )
}

const WelcomeAdmin = () => {
  return (
    <Card sx={{ overflow: 'visible', height: '250px', width: '810px', padding: '32px', backgroundColor: '#3c65c4' }}>
      <CardContent sx={{ pb: '0 !important'}}>
        <Grid container>
        <Grid item xs={6}>
          <Typography sx={{ mb: 1.5, fontSize: '2.5rem', fontWeight: 400, whiteSpace: 'nowrap', color: 'white' }}>
            Welcome {' '}
            <Box component='span' sx={{ fontWeight: 'bold' }}>
              Admin
            </Box>
            !
          </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <img alt='trophy' src='/images/cards/trophy.png' height={134} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CrmAward;

export { WelcomeAdmin }
