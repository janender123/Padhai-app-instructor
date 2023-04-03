// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'


const statusObj = {
  completed: { color: 'success' },
  pending: { color: 'warning' },
}


const data = [
  {
    title: 'Problem with quiz',
    author: 'Yogesh',
    status: 'completed',
    trendNumber: '15%',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    title: 'Class Delay',
    author: 'Rajesh',
    trendNumber: '85%',
    status: 'pending',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'success.main' }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    title: 'Commission rate',
    author: 'Ramesh',
    trendNumber: '48%',
    status: 'completed',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'success.main' }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    title: 'Refund request',
    author: 'Durgesh',
    trendNumber: '16%',
    status: 'completed',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    title: 'Contest rating ',
    author: 'Mahesh',
    trendNumber: '35%',
    status: 'pending',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'success.main' }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    title: 'Study Material query',
    author: 'Nikesh',
    trendNumber: '12%',
    status: 'completed',
    trend: (
      <Box component='span' sx={{ display: 'flex', color: 'success.main' }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  }
]

const RecentSupportTickets = () => {
  return (
    <Card>
      <CardHeader
        title='Recent Support Tickets'
        titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent sx={{ pb: theme => `${theme.spacing(1.75)} !important` }}>
        <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>2 pending replies</Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableBody>
              {data.map(row => {
                return (
                  <TableRow
                    key={row.title}
                    sx={{
                      '&:last-of-type td': { border: 0, pb: 0 },
                      '&:first-of-type td': { borderTop: theme => `1px solid ${theme.palette.divider}` },
                      '& .MuiTableCell-root': {
                        '&:last-of-type': { pr: 0 },
                        '&:first-of-type': { pl: 0 },
                        py: theme => `${theme.spacing(2.75)} !important`
                      }
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '0.875rem' }}>
                          {row.title}
                        </Typography>
                      </Box>
                      <Box sx={{  display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='caption'>{row.author}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.sales}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <CustomChip
                          skin='light'
                          size='small'
                          label={row.status}
                          color={statusObj[row.status].color}
                          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { px: 2.5, lineHeight: 1.385 } }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default RecentSupportTickets
