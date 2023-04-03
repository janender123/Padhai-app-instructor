export const rows = [
  {
    id: 1,
    status: 'Published',
    status_color: 'Green',
    title: "New Private Course Published",
    course: 'PCB Class 12th',
    sender: 'Admin',
    created_date: '',
    type: 'Students & Instructors',
    message: (
      <div>
        Hi, Dear students and instructors.<br />
        Travel Management Course published privately for you. please enroll on this course
      </div>
    ),
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'In Progress',
    status_color: 'blue',
    title: "New Class Published	",
    course: 'PCM Class 12th',
    sender: 'Organisation',
    created_date: '',
    type: 'Students',
    message: (
      <div>"Effective Time Management" Live Class Published, for getting the final certificate it is necessary to Enroll in this class.
      </div>
    ),
    class: '8th',
    board: 'ICSE',
  },
  {
    id: 11,
    status: 'Rejected',
    status_color: 'Red',
    title: "New Year Sales Festival",
    course: 'Physics Class 11th',
    sender: 'Admin',
    created_date: '',
    type: 'Instructors',
    message: (
      <div>
        Due to the New Year Festival, users who buy more than Rs 200 will be given a 20% discount code.
      </div>
    ),
    class: '10th',
    board: 'ICSE',
  },
  {
    id: 3,
    status: 'Published',
    status_color: 'Green',
    title: "Top summer classes	",
    course: 'Chemistry Class 10th',
    sender: 'Organisation',
    created_date: '',
    type: 'Students & Instructors',
    message: (
      <div>
       You can find top summer courses on the platform homepage and get all of them with 50% discount by using "mysummer" discount coupon.
      </div>
    ),
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
