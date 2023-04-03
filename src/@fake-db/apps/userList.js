// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  users: [
    {
      id: 1,
      fullName: 'Yogesh Kumar',
      company: 'Yotz PVT LTD',
      role: 'instructor',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'yogi@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      id: 2,
      fullName: 'Aryan Sharma',
      company: 'Skinder PVT LTD',
      role: 'user',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'aryan@imgur.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 3,
      fullName: 'Fardeen Khan',
      company: 'Oozz PVT LTD',
      role: 'admin',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'fardeen@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 4,
      fullName: 'Dev Dhawan',
      company: 'Oozz PVT LTD',
      role: 'user',
      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'dev@wordpress.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 5,
      fullName: 'Bhavya Bajaj',
      company: 'Aimbo PVT LTD',
      role: 'user',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'bhavb@yahoo.co.jp',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 6,
      fullName: 'Manas Sisodia',
      company: 'Jaxbean PVT LTD',
      role: 'instructor',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'manas@shinystat.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 7,
      fullName: 'Deepanshu kamrawal',
      company: 'Jazzy PVT LTD',
      role: 'admin',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'deepanshu@hotmail.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      id: 8,
      fullName: 'Sakshi Kumari',
      company: 'Pixoboo PVT LTD',
      role: 'instructor',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'sakshi@vinaora.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 9,
      fullName: 'Aatish Ghosh',
      company: 'Tekfly PVT LTD',
      role: 'user',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'aatish@dailymotion.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/2.png'
    },
    {
      id: 10,
      fullName: 'Himanshu Kumar',
      company: 'Gigashots PVT LTD',
      role: 'instructor',
      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'himanshu@kickstarter.com',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/5.png'
    },
    {
      id: 11,
      fullName: 'Amartya Panig',
      company: 'Eare PVT LTD',
      role: 'subscriber',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'amar@oakley.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 12,
      fullName: 'Bhanu Pratap',
      company: 'Yakitri PVT LTD',
      role: 'subscriber',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'Bhanu@hugedomains.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/5.png'
    }
  ]
}

const coursesListData = [
  {
    id: 1,
    hours: '18:42',
    class: '11th',
    progressValue: 78,
    progressColor: 'success',
    projectTitle: 'Chemistry',
    img: '/images/icons/courses-icons/chemistry-icon.png'
  },
  {
    id: 2,
    hours: '20:42',
    class: '10th',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectTitle: 'Biology',
    img: '/images/icons/courses-icons/biology-icon.png'
  },
  {
    id: 3,
    hours: '120:87',
    class: '9th',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectTitle: 'Physics',
    img: '/images/icons/courses-icons/physics-icon.png'
  },
  {
    id: 4,
    hours: '89:19',
    class: '12th',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectTitle: 'Maths',
    img: '/images/icons/courses-icons/maths-icon.png'
  },
  {
    id: 5,
    hours: '230:10',
    class: '10th',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectTitle: 'English',
    img: '/images/icons/courses-icons/english-icon.png'
  },
  {
    id: 6,
    hours: '342:41',
    class: '11th',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectTitle: 'Maths+Physics',
    img: '/images/icons/courses-icons/maths-icon.png'
  },
  {
    id: 7,
    hours: '12:45',
    class: '11th',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectTitle: 'Chemistry+Biology',
    img: '/images/icons/courses-icons/chemistry-icon.png'
  }
]

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data
  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1
  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data
  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/users/courses-list').reply(config => {
  const { q = '' } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = coursesListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
