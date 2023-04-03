export const rows = [
  {
    id: 1,
    start_date: '',
    email: 'yogesh20@gmail.com'
   
  },
  {
    id: 7,
    start_date: '',
    email: 'abhishek123@gmail.com'
  
  },
  {
    id: 11,
    start_date: '',
    email: 'raman56@gmail.com'
  
  },
  {
    id: 12,
    start_date: '',
    email: 'prabhas123@gmail.com'
  
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
