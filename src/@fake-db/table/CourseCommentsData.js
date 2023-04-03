export const rows = [
  {
    id: 1,
    status: 'Replied',
    status_color: 'Green',
    title: 'Quiz date changed',
    course: 'Physics Class 12th',
    sender: 'Mr. Deepak',
    created_date: '',
    message: <div>We are very happy that you are satisfied with this course.</div>,
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'Replied',
    status_color: 'green',
    title: 'Top Students',
    course: 'Chemistry Class 12th',
    sender: 'Pradeep',
    created_date: '',
    message: <div>Great course that gives you the basic knowledge needed to become a product manager.</div>,
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
    message: (
      <div>
        As i already new a lot on this matter i was surprised that i actually find out that there are more ways to tweak
        your time management
      </div>
    ),
    class: '10th',
    board: 'ICSE'
  },
  {
    id: 3,
    status: 'Pending',
    status_color: 'Red',
    title: 'Important notice',
    course: 'Chemistry Class 10th',
    sender: 'Deepak',
    created_date: '',
    message: (
      <div>
        Hi kate.
        <br />
        No, but it may change in the future. Thank you
      </div>
    ),
    class: '9th',
    board: 'CBSE'
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
