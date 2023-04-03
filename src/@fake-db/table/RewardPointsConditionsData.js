export const rows = [
  {
    id: 1,
    avatar: '3.png',
    title: 'Comment on Instructors Articles	',
    point_reward: '5',
    spent_points: '0',
    remaining_points: '15',
    email: 'yogesh12@gmail.com',
    phone: '12345678',
    language_name: 'English',
    board: "CBSE",
    created_date: '',
    class: '10th',
    stream: 'Science',
    status: 'Active',
    color: 'green'
  },
  {
    id: 2,
    avatar: '1.png',
    title: 'Publishing a Blog Post	',
    point_reward: '15',
    spent_points: '0',
    remaining_points: '15',
    email: 'rajesh12@gmail.com',
    phone: '12345678',
    language_name: 'Hindi',
    board: 'ICSE',
    created_date: '',
    class: '12th',
    stream: 'Arts',
    status: 'Active',
    color: 'green'
  },
  {
    id: 3,
    avatar: '2.png',
    title: 'Posting a Reply in Forum	',
    point_reward: '20',
    spent_points: '0',
    remaining_points: '15',
    email: 'mukesh12@gmail.com',
    phone: '12345678',
    language_name: 'Hindi',
    board: 'UP Board',
    created_date: '',
    class: '9th',
    stream: 'Science',
    status: 'Active',
    color: 'green'
  },
  {
    id: 4,
    avatar: '8.png',
    title: 'Create a Forum Topic	',
    point_reward: '10',
    spent_points: '0',
    remaining_points: '15',
    email: 'pooja12@gmail.com',
    phone: '12345678',
    language_name: 'Rajasthani',
    board: 'Rajasthan Board',
    created_date: '',
    class: '11th',
    stream: 'Commerce',
    region: 'Rajasthan',
    status: 'Active',
    color: 'green'
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
