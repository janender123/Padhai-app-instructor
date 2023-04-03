export const rows = [
  {
    id: 1,
    user: 'Akshat Mehra',
    role: 'Student',
    reference_code: 422536,
    registration_income: ' ₹ 400',
    sales_commission: ' ₹6.50',
    status: 'Yes'
  },
  {
    id: 7,
    user: 'Yogesh Kumar',
    role: 'Teacher',
    reference_code: 822047,
    registration_income: ' ₹ 650',
    sales_commission: ' ₹12',
    status: 'Yes',
  },
  {
    id: 11,
    user: 'Rohit Chaudhary',
    role: 'Student',
    reference_code: 233567,
    registration_income: ' ₹ 120',
    sales_commission: ' ₹9',
    status: 'Yes',
  },
  {
    id: 3,
    user: 'SHrey Babbar',
    role: 'Student',
    reference_code: 543789,
    registration_income: ' ₹ 540',
    sales_commission: ' ₹13',
    status: 'Yes',
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
