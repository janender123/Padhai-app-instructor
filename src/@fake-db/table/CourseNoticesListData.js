export const rows = [
  {
    id: 1,
    status: 'Published',
    status_color: 'Green',
    title: "Quiz date changed",
    course: 'PCB Class 12th',
    sender: 'Mr. Deepak',
    created_date: '',
    message: (
      <div>
        Hi, Dear students.<br />
        The mid-term Quiz date changed.<br />
        We hope you take the mentioned quiz next week.<br />
        Regards.
      </div>
    ),
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'In Progress',
    status_color: 'blue',
    title: "Top Students",
    course: 'PCM Class 12th',
    sender: 'Mr. Pradeep',
    created_date: '',
    message: (
      <div>Hi, Dear students<br />

        We intend to appreciate the top students.<br />

        We will announce the list of top students.<br />

        Regards.
      </div>
    ),
    class: '8th',
    board: 'ICSE',
  },
  {
    id: 11,
    status: 'Rejected',
    status_color: 'Red',
    title: "Important notice",
    course: 'Physics Class 11th',
    sender: 'Mr. Yogesh',
    created_date: '',
    message: (
      <div>
        Dear students.<br /> I will upload the new assignment for you soon.<br /> Please send the previous assignment by the end of the month.<br />

        The final quiz will be held at the end of next month.<br /> The exact date of the quiz will be announced.
      </div>
    ),
    class: '10th',
    board: 'ICSE',
  },
  {
    id: 3,
    status: 'Published',
    status_color: 'Green',
    title: "Important notice",
    course: 'Chemistry Class 10th',
    sender: 'Mr. Deepak',
    created_date: '',
    message: (
      <div>
        Dear students.<br /> I will upload the new assignment for you soon.<br /> Please send the previous assignment by the end of the month.<br />

        The final quiz will be held at the end of next month.<br /> The exact date of the quiz will be announced.
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
