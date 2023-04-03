export const rows = [
  {
    id: 1,
    affiliate_user: 'Yogesh Kumar',
    referred_user: 'Ishan Jain',
    reg_bonus: '₹ 200',
    commission: '₹ 0',
    user_bonus: '₹ 10',
    start_date: ''
  },
  {
    id: 7,
    affiliate_user: 'Abhishek Prasad',
    referred_user: 'Shrey Babbar',
    reg_bonus: '₹ 200',
    commission: '₹ 6.5',
    user_bonus: '₹ 10',
    start_date: ''
  },
  {
    id: 11,
    affiliate_user: 'Akshar Patel',
    referred_user: 'Atul Panchal',
    reg_bonus: '₹ 800',
    commission: '₹ 8.5',
    user_bonus: '₹ 50',
    start_date: ''
  },
  {
    id: 3,
    affiliate_user: 'Aryan Sharma',
    referred_user: 'Manas Sisodia',
    reg_bonus: '₹ 500',
    commission: '₹ 9.5',
    user_bonus: '₹ 10',
    start_date: ''
  }
]

const customDates = [new Date('2022-01-01'), new Date('2022-02-15'), new Date('2022-03-20'), new Date('2022-05-20')]

for (let i = 0; i < rows.length; i++) {
  if (customDates[i]) {
    const customDate = customDates[i]
    const day = customDate.getDate()
    const month = customDate.getMonth() + 1 // Adding 1 since January is 0
    const year = customDate.getFullYear()
    const customDateFormatted = `${day}/${month}/${year}`

    start_time: '10:00 AM', (rows[i].start_date = customDateFormatted)
  }
}
