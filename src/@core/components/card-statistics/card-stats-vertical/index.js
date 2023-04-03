// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardStatsVertical = props => {
  // ** Props
  const { title, color, icon, stats, chipText, trendNumber, trend = 'positive' } = props

  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 6, width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <CustomAvatar skin='light' variant='rounded' color={color}>
            {icon}
          </CustomAvatar>
          <Box
            sx={{ display: 'flex', alignItems: 'center', color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            <Typography variant='subtitle2' sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}>
              {trendNumber}
            </Typography>
            <Icon icon={trend === 'positive' ? 'mdi:chevron-up' : 'mdi:chevron-down'} fontSize='1.25rem' />
          </Box>
        </Box>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {stats}
        </Typography>
        <Typography variant='body2' sx={{ mb: 5 }}>
          {title}
        </Typography>
        <CustomChip
          skin='light'
          size='small'
          label={chipText}
          color='secondary'
          sx={{ height: 20, fontWeight: 500, fontSize: '0.75rem', alignSelf: 'flex-start', color: 'text.secondary' }}
        />
      </CardContent>
    </Card>
  )
}

// ** Styled Avatar component
const Avatar = styled(CustomAvatar)(({ theme }) => ({
  width: 50,
  height: 50,
  marginRight: theme.spacing(4)
}))

const CardStatsHomeCategories = props => {
  // ** Props
  const { title, color, icon, stats, chipText, trendNumber, trend = 'positive' } = props

  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 6, width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Avatar skin='light' color={color} variant='rounded'>
            {icon}
          </Avatar>
          <Box
            sx={{ display: 'flex', alignItems: 'center', color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            <Typography variant='subtitle2' sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}>
              {trendNumber}
            </Typography>
            <Icon icon={trend === 'positive' ? 'mdi:chevron-up' : 'mdi:chevron-down'} fontSize='1.25rem' />
          </Box>
        </Box>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {title}
        </Typography>
        <CustomChip
          skin='light'
          size='small'
          label={chipText}
          color='secondary'
          sx={{ height: 30, fontWeight: 600, fontSize: '1rem', alignSelf: 'flex-start', color: 'text.primary' }}
        />
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical

export { CardStatsHomeCategories }
