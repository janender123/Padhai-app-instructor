export const rows = [
  {
    id: 1,
    status: 'Replied',
    status_color: 'Green',
    title: 'Quiz date changed',
    course: 'PCB Class 12th',
    sender: 'Deepak',
    created_date: '',
    message: 'Against Rules',
    comment: <span>Course files are not complete.</span>,
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'Replied',
    status_color: 'green',
    title: 'Top Students',
    course: 'Physics Class 12th',
    sender: 'Pradeep',
    created_date: '',
    message: 'Not Related',
    comment: <span>I think the right category has not been chosen for this course.</span>,
    class: '8th',
    board: 'ICSE'
  },
  {
    id: 11,
    status: 'Pending',
    status_color: 'Red',
    title: 'Important notice',
    course: 'Physics Class 11th',
    sender: 'Yogesh',
    created_date: '',
    message: 'Incomplete',
    comment: (
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
