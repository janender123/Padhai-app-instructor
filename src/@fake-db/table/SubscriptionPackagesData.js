export const rows = [
  {
    id: 1,
    title: 'Bronze',
    price: '199',
    avatar: 'bronze.png',
    subscribe_times: '100',
    days: '15',
    sales: '100',
    popular_badge: 'No',
    unlimited_use: 'No',
    status: 'Approved',
    language: 'English',
    status_color: 'black',
    full_name: "PCM",
    instructor: 'Mr. Deepak',
    start_time: '10:00 AM',
    start_date: '',
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    title: 'Silver',
    price: '399',
    avatar: 'silver.png',
    subscribe_times: '10000',
    days: '30',
    sales: '10000',
    popular_badge: 'Yes',
    unlimited_use: 'No',
    status: 'Pending',
    language: 'English',
    status_color: 'green',
    full_name: "PCB",
    instructor: 'Mr. Pradeep',
    start_time: '11:00 AM',
    start_date: '',
    class: '8th',
    board: 'ICSE',
  },
  {
    id: 11,
    title: 'Gold',
    price: '499',
    avatar: 'gold.png',
    subscribe_times: '1000',
    days: '60',
    sales: '1000',
    popular_badge: 'No',
    unlimited_use: 'No',
    status: 'Rejected',
    language: 'Hindi',
    status_color: 'black',
    full_name: "Physics",
    instructor: 'Mr. Yogesh',
    start_time: '10:00 AM',
    start_date: '',
    class: '10th',
    board: 'ICSE',
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

    start_time: '10:00 AM',rows[i].
    start_date = customDateFormatted;
  }
}
