// ** MUI Imports
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// Styled Grid component
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
  width: 298,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 250,
    position: 'static'
  }
}))

const WelcomeAdmin = () => {
  // ** Hook
  const theme = useTheme()
  const [showBox, setShowBox] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > window.screen.width * 0.4) {
        setShowBox(true)
      } else {
        setShowBox(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Card sx={{ position: 'relative', backgroundColor: '#3c65c4' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' sx={{ mb: 4.5, color: 'white', fontSize: '2.4rem !important' }}>
              Welcome{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                Admin
              </Box>
              ! 🎉
            </Typography>
            <Typography variant='body2'>
              <Box component='span' sx={{ fontWeight: 600 }}></Box>{' '}
            </Typography>
            <Typography sx={{ mb: 4.5 }} variant='body2'></Typography>
            {showBox && <Box height={90} />}
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img alt='Welcome Admin' src={`/images/cards/illustration-john-${theme.palette.mode}.png`} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const AnalyticsCongratulations = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' sx={{ mb: 4.5 }}>
              Congratulations{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                John
              </Box>
              ! 🎉
            </Typography>
            <Typography variant='body2'>
              You have done{' '}
              <Box component='span' sx={{ fontWeight: 600 }}>
                68%
              </Box>{' '}
              😎 more sales today.
            </Typography>
            <Typography sx={{ mb: 4.5 }} variant='body2'>
              Check your new badge in your profile.
            </Typography>
            <Button variant='contained'>View Profile</Button>
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img alt='Congratulations John' src={`/images/cards/illustration-john-${theme.palette.mode}.png`} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsCongratulations

export { WelcomeAdmin }
