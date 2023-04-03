// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import TeacherViewPage from 'src/views/apps/user/view/TeacherViewPage'

const TeacherView = ({ tab, invoiceData }) => {
  return <TeacherViewPage
   tab={tab} invoiceData={invoiceData} />
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'overview' } },
      { params: { tab: 'security' } },
      { params: { tab: 'financial' } },
      { params: { tab: 'notification' } },
      { params: { tab: 'connection' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await axios.get('/apps/invoice/invoices')
  const invoiceData = res.data.allData

  return {
    props: {
      invoiceData,
      tab: params?.tab
    }
  }
}

export default TeacherView
