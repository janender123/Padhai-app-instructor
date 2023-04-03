// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTab from '@mui/material/Tab'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import TeacherViewOverview from './TeacherViewOverview'
import TeacherViewSecurity from './TeacherViewSecurity'
import TeacherViewBilling from 'src/views/apps/user/view/TeacherViewFinancial'
import TeacherViewNotification from './TeacherViewNotification'
import TeacherViewConnection from './TeacherViewConnection'

// ** Styled Tab component
const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

const TeacherViewRight = ({ tab, invoiceData }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(true)

  // ** Hooks
  const router = useRouter()

  const handleChange = (event, value) => {
    setIsLoading(true)
    setActiveTab(value)
    router
      .push({
        pathname: `/apps/teacher/view/${value.toLowerCase()}`
      })
      .then(() => setIsLoading(false))
  }
  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false)
    }
  }, [invoiceData])

  return (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='overview' label='Overview' icon={<Icon icon='mdi:account-outline' />} />
        <Tab value='security' label='Security' icon={<Icon icon='mdi:lock-outline' />} />
        <Tab value='financial' label='financial' icon={<Icon icon='mdi:bookmark-outline' />} />
        <Tab value='notification' label='Notification' icon={<Icon icon='mdi:bell-outline' />} />
        <Tab value='connection' label='Connection' icon={<Icon icon='mdi:link-variant' />} />
      </TabList>
      <Box sx={{ mt: 6 }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel sx={{ p: 0 }} value='overview'>
              <TeacherViewOverview invoiceData={invoiceData} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='security'>
              <TeacherViewSecurity />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='financial'>
              <TeacherViewBilling />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='notification'>
              <TeacherViewNotification />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='connection'>
              <TeacherViewConnection />
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  )
}

export default TeacherViewRight
