export const rows = [
  {
    id: 1,
    status: 'Replied',
    status_color: 'Green',
    type: 'Post',
    title: 'What is social media marketing ?',
    course: 'Chemistry Class 12th',
    sender: 'Deepak',
    created_date: '',
    reason: 'Against Rules',
    message: <span>Course files are not complete.</span>,
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'Replied',
    status_color: 'green',
    type: 'Topic',
    title: 'What is Narendra Modi famous for ?',
    course: 'Physics Class 12th',
    sender: 'Pradeep',
    created_date: '',
    reason: 'Not Related',
    message: <span>I think the right category has not been chosen for this course.</span>,
    class: '8th',
    board: 'ICSE'
  },
  {
    id: 11,
    status: 'Pending',
    status_color: 'Red',
    type: 'Post',
    title: 'What is Black Iron ?',
    course: 'Physics Class 11th',
    sender: 'Yogesh',
    created_date: '',
    reason: 'Incomplete',
    message: (
      <span>
        All parts of the course not covered.
      </span>
    ),
    class: '10th',
    board: 'ICSE'
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

    rows[i].created_date = customDateFormatted
  }
}
