export const rows = [
  {
    id: 1,
    status: 'Published',
    status_color: 'Green',
    full_name: "SST",
    instructor: 'Mr. Deepak',
    created_date: '',
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'In Progress',
    status_color: 'blue',
    full_name: "Science",
    instructor: 'Mr. Pradeep',
    created_date: '',
    class: '8th',
    board: 'ICSE',
  },
  {
    id: 11,
    status: 'Rejected',
    status_color: 'Red',
    full_name: "Maths",
    instructor: 'Mr. Yogesh',
    created_date: '',
    class: '10th',
    board: 'ICSE',
  },
  {
    id: 3,
    status: 'Published',
    status_color: 'Green',
    full_name: "Hindi",
    instructor: 'Mr. Deepak',
    created_date: '',
    class: '9th',
    board: 'CBSE',
  }
]

const customDates = [
  new Date("2022-01-01"),
  new Date("2022-02-15"),
  new Date("2022-03-20"),
  new Date("2022-05-20")
];

for (let i = 0; i < rows.length; i++) {
  if (customDates[i]) {
    const customDate = customDates[i];
    const day = customDate.getDate();
    const month = customDate.getMonth() + 1; // Adding 1 since January is 0
    const year = customDate.getFullYear();
    const customDateFormatted = `${day}/${month}/${year}`;

    rows[i].created_date = customDateFormatted;
  }
}
