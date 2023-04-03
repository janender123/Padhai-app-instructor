export const rows = [
  {
    id: 1,
    sending_method: 'Send to all newsletter members	',
    sent_emails: 3,
    title: 'Black Friday OFF',
    created_date: '',
    description: <div>Hello,<br/>Be sure to check our Black Friday discounts.<br/>Regards.</div>,
  },
  {
    id: 7,
    sending_method: 'Send to all subscribers',
    sent_emails: 2,
    title: 'Christmas Discount',
    created_date: '',
    description: <div>Hello,<br/>Be sure to check our Christmas discounts.<br/>Regards.</div>,
  },
  {
    id: 11,
    sending_method: 'Send to all users',
    sent_emails: 3,
    title: 'Diwali Dhamaka',
    created_date: '',
    description: (
      <div>Hello,<br/>Be sure to check our Diwali Discount.<br/>Regards.</div>
    ),
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
