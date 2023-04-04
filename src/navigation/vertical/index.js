const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline',
      children: [
        {
          title: 'Home',
          path: '/dashboards/home'
        }

        // {
        //   title: 'Marketing',
        //   path: '/dashboards/marketing'
        // }
      ]
    },
    {
      sectionTitle: 'Education'
    },

    // {
    //   title: 'Categories',
    //   icon: 'mdi:file-document-outline',
    //   children: [
    //     {
    //       title: 'Boards and Exams',
    //       path: '/apps/categories/boards-and-exam'
    //     },
    //     {
    //       title: 'Classes',
    //       path: '/apps/categories/class'
    //     },
    //     {
    //       title: 'Streams',
    //       path: '/apps/categories/stream'
    //     },
    //     {
    //       title: 'Language',
    //       path: '/apps/categories/language'
    //     }
    //   ]
    // },
    
    {
      title: 'Courses',
      icon: 'fluent-mdl2:publish-course',
      children: [
        {
          title: 'Courses List',
          path: '/apps/courses/courses-list'
        },
        {
          title: 'New Course',
          path: '/apps/courses/new-course'
        }
      ]
    },
    {
      title: 'Live Classes',
      icon: 'material-symbols:video-camera-back-outline-sharp',
      children: [
        {
          title: 'Live Classes List',
          path: '/apps/live-classes/live-classes-list'
        },
        {
          title: 'New Live Class',
          path: '/apps/live-classes/new-live-class'
        }
      ]
    },
    {
      title: 'Course Bundles',
      icon: 'academicons:coursera',
      children: [
        {
          title: 'List',
          path: '/apps/course-bundle/list'
        },
        {
          title: 'New',
          path: '/apps/course-bundle/new'
        }
      ]
    },
    {
      title: '1:1 Sessions',
      icon: 'bi:people',
      children: [
        {
          title: 'List',
          path: '/apps/sessions/list'
        },
        {
          title: 'New',
          path: '/apps/sessions/new'
        }
      ]
    },
    {
      title: 'Quiz and Contests',
      icon: 'material-symbols:quiz-outline-rounded',
      children: [
        {
          title: 'New Question',
          path: '/apps/quiz-and-contests/new-question'
        },
        {
          title: 'Questions List',
          path: '/apps/quiz-and-contests/questions-list'
        },
        {
          title: 'Daily Quiz',
          path: '/apps/quiz-and-contests/daily-quiz'
        },
        {
          title: 'Contests',
          children: [
            {
              title: 'Manage Contest',
              path: '/apps/quiz-and-contests/contests/manage-contest'
            },
            {
              title: 'Manage Questions',
              path: '/apps/quiz-and-contests/contests/manage-questions'
            }
          ]
        }
      ]
    },
    {
      title: 'Study Material',
      icon: 'cil:education',
      children: [
        {
          title: 'List',
          path: '/apps/study-material/list'
        },
        {
          title: 'New',
          path: '/apps/study-material/new'
        }
      ]
    },
    {
      title: 'Course Notices',
      icon: 'fe:notice-active',
      children: [
        {
          title: 'List',
          path: '/apps/course-notices/list'
        },
        {
          title: 'New',
          path: '/apps/course-notices/new'
        }
      ]
    },
    {
      title: 'Assignments',
      icon: 'material-symbols:assignment-add-outline',
      path: '/apps/assignments'
    },

    // {
    //   sectionTitle: 'User Section'
    // },
    // {
    //   title: 'User',
    //   icon: 'mdi:account-outline',
    //   children: [
    //     {
    //       title: 'Instructor',
    //       path: '/user/instructor'
    //     },
    //     {
    //       title: 'User',
    //       path: '/user/user'
    //     },
    //     {
    //       title: 'New',
    //       path: '/user/new'
    //     }
    //   ]
    // },

    // // {
    // //   title: 'User ref',
    // //   icon: 'mdi:account-outline',
    // //   children: [
    // //     {
    // //       title: 'User List',
    // //       path: '/apps/user/list'
    // //     },
    // //     {
    // //       title: 'Teacher List',
    // //       path: '/apps/teacher/list'
    // //     },
    // //     {
    // //       title: 'View User',
    // //       children: [
    // //         {
    // //           title: 'Overview',
    // //           path: '/apps/user/view/overview'
    // //         },
    // //         {
    // //           title: 'Security',
    // //           path: '/apps/user/view/security'
    // //         },
    // //         {
    // //           title: 'Billing & Plans',
    // //           path: '/apps/user/view/billing-plan'
    // //         },
    // //         {
    // //           title: 'Notifications',
    // //           path: '/apps/user/view/notification'
    // //         },
    // //         {
    // //           title: 'Connection',
    // //           path: '/apps/user/view/connection'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'View Teacher',
    // //       children: [
    // //         {
    // //           title: 'Overview',
    // //           path: '/apps/teacher/view/overview'
    // //         },
    // //         {
    // //           title: 'Security',
    // //           path: '/apps/teacher/view/security'
    // //         },
    // //         {
    // //           title: 'Financial',
    // //           path: '/apps/teacher/view/financial'
    // //         },
    // //         {
    // //           title: 'Notifications',
    // //           path: '/apps/teacher/view/notification'
    // //         },
    // //         {
    // //           title: 'Connection',
    // //           path: '/apps/teacher/view/connection'
    // //         }
    // //       ]
    // //     }
    // //   ]
    // // },
    // {
    //   title: 'Roles & Permissions',
    //   icon: 'mdi:shield-outline',
    //   children: [
    //     {
    //       title: 'Roles',
    //       path: '/apps/roles'
    //     },
    //     {
    //       title: 'Permissions',
    //       path: '/apps/permissions'
    //     }
    //   ]
    // },
    // {
    //   title: 'Badges',
    //   icon: 'tabler:trophy',
    //   path: '/apps/badges'
    // },
    // {
    //   sectionTitle: 'Forum'
    // },
    // {
    //   title: 'Forums',
    //   icon: 'ri:message-2-line',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/forums/list'
    //     },
    //     {
    //       title: 'New',
    //       path: '/apps/forums/new'
    //     }
    //   ]
    // },
    // {
    //   title: 'Featured Topics',
    //   icon: 'mdi:message-settings-outline',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/featured-topics/list'
    //     },
    //     {
    //       title: 'New',
    //       path: '/apps/featured-topics/new'
    //     }
    //   ]
    // },
    // {
    //   title: 'Recommended Topics',
    //   icon: 'carbon:thumbs-up',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/recommended-topics/list'
    //     },
    //     {
    //       title: 'New',
    //       path: '/apps/recommended-topics/new'
    //     }
    //   ]
    // },
    // {
    //   sectionTitle: 'CRM'
    // },
    // {
    //   title: 'Support',
    //   icon: 'material-symbols:support-agent',
    //   children: [
    //     {
    //       title: 'Tickets',
    //       path: '/apps/support/tickets'
    //     },
    //     {
    //       title: 'New Support Ticket',
    //       path: '/apps/support/new'
    //     }
    //   ]
    // },
    // {
    //   title: 'Comments',
    //   icon: 'tabler:message-circle',
    //   children: [
    //     {
    //       title: 'Course Comments',
    //       path: '/apps/comments/course'
    //     },
    //     {
    //       title: 'Bundle Comments',
    //       path: '/apps/comments/bundle'
    //     }
    //   ]
    // },
    // {
    //   title: 'Reports',
    //   icon: 'octicon:report-24',
    //   children: [
    //     {
    //       title: 'Course',
    //       path: '/apps/reports/course'
    //     },
    //     {
    //       title: 'Course Bundle',
    //       path: '/apps/reports/bundle'
    //     },
    //     {
    //       title: 'Comments',
    //       path: '/apps/reports/comments'
    //     },
    //     {
    //       title: 'Live Classes',
    //       path: '/apps/reports/live-classes'
    //     },
    //     {
    //       title: 'Forum Topics',
    //       path: '/apps/reports/forum-topics'
    //     }
    //   ]
    // },
    // {
    //   title: 'Noticeboard',
    //   icon: 'mdi:notice-board',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/noticeboard/list'
    //     },
    //     {
    //       title: 'New',
    //       path: '/apps/noticeboard/new'
    //     }
    //   ]
    // },
    // {
    //   sectionTitle: 'Financial'
    // },
    // {
    //   title: 'Subscribe',
    //   icon: 'eos-icons:product-subscriptions-outlined',
    //   children: [
    //     {
    //       title: 'Packages',
    //       path: '/apps/subscribe/packages'
    //     },
    //     {
    //       title: 'New Package',
    //       path: '/apps/subscribe/new'
    //     }
    //   ]
    // },
    // {
    //   title: 'Reward Points',
    //   icon: 'carbon:gift',
    //   children: [
    //     {
    //       title: 'History',
    //       path: '/apps/reward-points/history'
    //     },
    //     {
    //       title: 'Conditions',
    //       path: '/apps/reward-points/conditions'
    //     },
    //     {
    //       title: 'settings',
    //       path: '/apps/reward-points/settings'
    //     }
    //   ]
    // },
    // {
    //   sectionTitle: 'Marketing'
    // },
    // {
    //   title: 'Coupons',
    //   icon: 'mdi:coupon-outline',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/coupons/list'
    //     },
    //     {
    //       title: 'New',
    //       path: '/apps/coupons/new'
    //     }
    //   ]
    // },
    // {
    //   title: 'Email Newsletter',
    //   icon: 'ic:twotone-attach-email',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/email-newsletter/list'
    //     },
    //     {
    //       title: 'Send',
    //       path: '/apps/email-newsletter/send'
    //     },
    //     {
    //       title: 'History',
    //       path: '/apps/email-newsletter/history'
    //     }
    //   ]
    // },
    //  {
    //   title: 'Affiliate',
    //   icon: 'ph:speaker-high',
    //   children: [
    //     {
    //       title: 'History',
    //       path: '/apps/affiliate/history'
    //     },
    //     {
    //       title: 'Affiliate Users',
    //       path: '/apps/affiliate/users'
    //     }
    //   ]
    // },

    // // {
    // //   title: 'Pages',
    // //   icon: 'mdi:file-document-outline',
    // //   children: [
    // //     {
    // //       title: 'User Profile',
    // //       children: [
    // //         {
    // //           title: 'Profile',
    // //           path: '/pages/user-profile/profile'
    // //         },
    // //         {
    // //           title: 'Teams',
    // //           path: '/pages/user-profile/teams'
    // //         },
    // //         {
    // //           title: 'Projects',
    // //           path: '/pages/user-profile/projects'
    // //         },
    // //         {
    // //           title: 'Connections',
    // //           path: '/pages/user-profile/connections'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Account Settings',
    // //       children: [
    // //         {
    // //           title: 'Account',
    // //           path: '/pages/account-settings/account'
    // //         },
    // //         {
    // //           title: 'Security',
    // //           path: '/pages/account-settings/security'
    // //         },
    // //         {
    // //           title: 'Billing',
    // //           path: '/pages/account-settings/billing'
    // //         },
    // //         {
    // //           title: 'Notifications',
    // //           path: '/pages/account-settings/notifications'
    // //         },
    // //         {
    // //           title: 'Connections',
    // //           path: '/pages/account-settings/connections'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'FAQ',
    // //       path: '/pages/faq'
    // //     },
    // //     {
    // //       title: 'Help Center',
    // //       path: '/pages/help-center'
    // //     },
    // //     {
    // //       title: 'Pricing',
    // //       path: '/pages/pricing'
    // //     },
    // //     {
    // //       title: 'Miscellaneous',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Coming Soon',
    // //           path: '/pages/misc/coming-soon'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Under Maintenance',
    // //           path: '/pages/misc/under-maintenance'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Page Not Found - 404',
    // //           path: '/pages/misc/404-not-found'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Not Authorized - 401',
    // //           path: '/pages/misc/401-not-authorized'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Server Error - 500',
    // //           path: '/pages/misc/500-server-error'
    // //         }
    // //       ]
    // //     }
    // //   ]
    // // },
    // // {
    // //   title: 'Auth Pages',
    // //   icon: 'mdi:lock-outline',
    // //   children: [
    // //     {
    // //       title: 'Login',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Login v1',
    // //           path: '/pages/auth/login-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Login v2',
    // //           path: '/pages/auth/login-v2'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Login With AppBar',
    // //           path: '/pages/auth/login-with-appbar'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Register',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Register v1',
    // //           path: '/pages/auth/register-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Register v2',
    // //           path: '/pages/auth/register-v2'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Register Multi-Steps',
    // //           path: '/pages/auth/register-multi-steps'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Verify Email',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Verify Email v1',
    // //           path: '/pages/auth/verify-email-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Verify Email v2',
    // //           path: '/pages/auth/verify-email-v2'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Forgot Password',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Forgot Password v1',
    // //           path: '/pages/auth/forgot-password-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Forgot Password v2',
    // //           path: '/pages/auth/forgot-password-v2'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Reset Password',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Reset Password v1',
    // //           path: '/pages/auth/reset-password-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Reset Password v2',
    // //           path: '/pages/auth/reset-password-v2'
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Two Steps',
    // //       children: [
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Two Steps v1',
    // //           path: '/pages/auth/two-steps-v1'
    // //         },
    // //         {
    // //           openInNewTab: true,
    // //           title: 'Two Steps v2',
    // //           path: '/pages/auth/two-steps-v2'
    // //         }
    // //       ]
    // //     }
    // //   ]
    // // },
    // // {
    // //   title: 'Wizard Examples',
    // //   icon: 'mdi:transit-connection-horizontal',
    // //   children: [
    // //     {
    // //       title: 'Checkout',
    // //       path: '/pages/wizard-examples/checkout'
    // //     },
    // //     {
    // //       title: 'Property Listing',
    // //       path: '/pages/wizard-examples/property-listing'
    // //     },
    // //     {
    // //       title: 'Create Deal',
    // //       path: '/pages/wizard-examples/create-deal'
    // //     }
    // //   ]
    // // },
    // // {
    // //   icon: 'mdi:vector-arrange-below',
    // //   title: 'Dialog Examples',
    // //   path: '/pages/dialog-examples'
    // // },
    // // {
    // //   sectionTitle: 'User Interface'
    // // },
    // // {
    // //   title: 'Typography',
    // //   icon: 'mdi:format-letter-case',
    // //   path: '/ui/typography'
    // // },
    // // {
    // //   title: 'Icons',
    // //   path: '/ui/icons',
    // //   icon: 'mdi:google-circles-extended'
    // // },
    // // {
    // //   title: 'Cards',
    // //   icon: 'mdi:credit-card-outline',
    // //   children: [
    // //     {
    // //       title: 'Basic',
    // //       path: '/ui/cards/basic'
    // //     },
    // //     {
    // //       title: 'Advanced',
    // //       path: '/ui/cards/advanced'
    // //     },
    // //     {
    // //       title: 'Statistics',
    // //       path: '/ui/cards/statistics'
    // //     },
    // //     {
    // //       title: 'Widgets',
    // //       path: '/ui/cards/widgets'
    // //     },
    // //     {
    // //       title: 'Gamification',
    // //       path: '/ui/cards/gamification'
    // //     },
    // //     {
    // //       title: 'Actions',
    // //       path: '/ui/cards/actions'
    // //     }
    // //   ]
    // // },
    // // {
    // //   badgeContent: '18',
    // //   title: 'Components',
    // //   icon: 'mdi:archive-outline',
    // //   badgeColor: 'primary',
    // //   children: [
    // //     {
    // //       title: 'Accordion',
    // //       path: '/components/accordion'
    // //     },
    // //     {
    // //       title: 'Alerts',
    // //       path: '/components/alerts'
    // //     },
    // //     {
    // //       title: 'Avatars',
    // //       path: '/components/avatars'
    // //     },
    // //     {
    // //       title: 'Badges',
    // //       path: '/components/badges'
    // //     },
    // //     {
    // //       title: 'Buttons',
    // //       path: '/components/buttons'
    // //     },
    // //     {
    // //       title: 'Button Group',
    // //       path: '/components/button-group'
    // //     },
    // //     {
    // //       title: 'Chips',
    // //       path: '/components/chips'
    // //     },
    // //     {
    // //       title: 'Dialogs',
    // //       path: '/components/dialogs'
    // //     },
    // //     {
    // //       title: 'List',
    // //       path: '/components/list'
    // //     },
    // //     {
    // //       title: 'Menu',
    // //       path: '/components/menu'
    // //     },
    // //     {
    // //       title: 'Pagination',
    // //       path: '/components/pagination'
    // //     },
    // //     {
    // //       title: 'Ratings',
    // //       path: '/components/ratings'
    // //     },
    // //     {
    // //       title: 'Snackbar',
    // //       path: '/components/snackbar'
    // //     },
    // //     {
    // //       title: 'Swiper',
    // //       path: '/components/swiper'
    // //     },
    // //     {
    // //       title: 'Tabs',
    // //       path: '/components/tabs'
    // //     },
    // //     {
    // //       title: 'Timeline',
    // //       path: '/components/timeline'
    // //     },
    // //     {
    // //       title: 'Toasts',
    // //       path: '/components/toast'
    // //     },
    // //     {
    // //       title: 'Tree View',
    // //       path: '/components/tree-view'
    // //     },
    // //     {
    // //       title: 'More',
    // //       path: '/components/more'
    // //     },
    // //   ]
    // // },
    // // {
    // //   sectionTitle: 'Forms & Tables'
    // // },
    // // {
    // //   title: 'Form Elements',
    // //   icon: 'mdi:form-select',
    // //   children: [
    // //     {
    // //       title: 'Text Field',
    // //       path: '/forms/form-elements/text-field'
    // //     },
    // //     {
    // //       title: 'Select',
    // //       path: '/forms/form-elements/select'
    // //     },
    // //     {
    // //       title: 'Checkbox',
    // //       path: '/forms/form-elements/checkbox'
    // //     },
    // //     {
    // //       title: 'Radio',
    // //       path: '/forms/form-elements/radio'
    // //     },
    // //     {
    // //       title: 'Custom Inputs',
    // //       path: '/forms/form-elements/custom-inputs'
    // //     },
    // //     {
    // //       title: 'Textarea',
    // //       path: '/forms/form-elements/textarea'
    // //     },
    // //     {
    // //       title: 'Autocomplete',
    // //       path: '/forms/form-elements/autocomplete'
    // //     },
    // //     {
    // //       title: 'Date Pickers',
    // //       path: '/forms/form-elements/pickers'
    // //     },
    // //     {
    // //       title: 'Switch',
    // //       path: '/forms/form-elements/switch'
    // //     },
    // //     {
    // //       title: 'File Uploader',
    // //       path: '/forms/form-elements/file-uploader'
    // //     },
    // //     {
    // //       title: 'Editor',
    // //       path: '/forms/form-elements/editor'
    // //     },
    // //     {
    // //       title: 'Slider',
    // //       path: '/forms/form-elements/slider'
    // //     },
    // //     {
    // //       title: 'Input Mask',
    // //       path: '/forms/form-elements/input-mask'
    // //     },
    // //   ]
    // // },
    // // {
    // //   icon: 'mdi:cube-outline',
    // //   title: 'Form Layouts',
    // //   path: '/forms/form-layouts'
    // // },
    // // {
    // //   title: 'Form Validation',
    // //   path: '/forms/form-validation',
    // //   icon: 'mdi:checkbox-marked-circle-outline'
    // // },
    // // {
    // //   title: 'Form Wizard',
    // //   path: '/forms/form-wizard',
    // //   icon: 'mdi:transit-connection-horizontal'
    // // },
    // // {
    // //   title: 'Table',
    // //   icon: 'mdi:grid-large',
    // //   path: '/tables/mui'
    // // },
    // // {
    // //   title: 'Mui DataGrid',
    // //   icon: 'mdi:grid',
    // //   path: '/tables/data-grid'
    // // },
    // // {
    // //   sectionTitle: 'Charts & Misc'
    // // },
    // // {
    // //   title: 'Charts',
    // //   icon: 'mdi:chart-donut',
    // //   children: [
    // //     {
    // //       title: 'Apex',
    // //       path: '/charts/apex-charts'
    // //     },
    // //     {
    // //       title: 'Recharts',
    // //       path: '/charts/recharts'
    // //     },
    // //     {
    // //       title: 'ChartJS',
    // //       path: '/charts/chartjs'
    // //     }
    // //   ]
    // // },
    // // {
    // //   path: '/acl',
    // //   action: 'read',
    // //   subject: 'acl-page',
    // //   icon: 'mdi:shield-outline',
    // //   title: 'Access Control'
    // // },
    // // {
    // //   title: 'Others',
    // //   icon: 'mdi:dots-horizontal',
    // //   children: [
    // //     {
    // //       title: 'Menu Levels',
    // //       children: [
    // //         {
    // //           title: 'Menu Level 2.1'
    // //         },
    // //         {
    // //           title: 'Menu Level 2.2',
    // //           children: [
    // //             {
    // //               title: 'Menu Level 3.1'
    // //             },
    // //             {
    // //               title: 'Menu Level 3.2'
    // //             }
    // //           ]
    // //         }
    // //       ]
    // //     },
    // //     {
    // //       title: 'Disabled Menu',
    // //       disabled: true
    // //     },
    // //     {
    // //       title: 'Raise Support',
    // //       externalLink: true,
    // //       openInNewTab: true,
    // //       path: 'https://pixinvent.ticksy.com/'
    // //     },
    // //     {
    // //       title: 'Documentation',
    // //       externalLink: true,
    // //       openInNewTab: true,
    // //       path: 'https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'
    // //     }
    // //   ]
    // // }
  ]
}

export default navigation
