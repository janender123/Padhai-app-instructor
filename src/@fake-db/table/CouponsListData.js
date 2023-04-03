export const rows = [
  {
    id: 1,
    status: 'Active',
    title: 'Categories Coupon	',
    type: 'Percentage',
    code: 'GJKTPW',
    expiry_date: '15/12/2023',
    usable_times: 10,
    remaining_times: 1,
    percentage: '10%',
    max_amount: '₹ 100',
    amount: '',
    minimum_order: '₹ 2000',
    user: 'All Users',
    role: 'Student',
    department: 'Content',
    sub_forums: '4',
    status_color: 'Green',
    full_name: "PCM",
    instructor: 'Mr. Deepak',
    start_time: '10:00 AM',
    start_date: '',
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'Active',
    title: 'Store Virtual Products Coupon',
    type: 'Percentage',
    code: 'VKRYT22	',
    expiry_date: '15/12/2023',
    usable_times: 10,
    remaining_times: 9,
    percentage: '20%',
    max_amount: '',
    amount: '',
    minimum_order: '₹ 1000',
    user: 'All Users',
    role: 'Instructor',
    department: 'Financial',
    sub_forums: '0',
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
    status: 'Expired',
    title: 'Black Friday',
    type: 'Percentage',
    code: 'SPGH22',
    expiry_date: '15/12/2023',
    usable_times: 50,
    remaining_times: 41,
    percentage: '30%',
    max_amount: '₹ 1000',
    amount: '',
    minimum_order: '',
    user: 'All Users',
    role: 'Admin',
    department: 'Marketing',
    sub_forums: '3',   
    status_color: 'Red',
    full_name: "Physics",
    instructor: 'Mr. Yogesh',
    start_time: '10:00 AM',
    start_date: '',
    class: '10th',
    board: 'ICSE',
  },
  {
    id: 12,
    status: 'Expired',
    title: 'Store Physical Products Coupon',
    type: 'Percentage',
    code: 'BLK2021',
    expiry_date: '15/12/2023',
    usable_times: 100,
    remaining_times: 0,
    percentage: '10%',
    max_amount: '',
    amount: '₹ 1000',
    minimum_order: '₹ 10000',
    user: 'All Users',
    role: 'Admin',
    department: 'Technical',
    sub_forums: '3',   status_color: 'Red',
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
