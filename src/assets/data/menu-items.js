export const MENU_ITEMS = [{
  key: 'menu',
  label: 'MENU',
  isTitle: true
}, {
  key: 'dashboards',
  label: 'Dashboards',
  icon: 'ri:dashboard-2-line',
  children: [{
    key: 'analytics',
    label: 'Analytics',
    url: '/dashboards/analytics',
    parentKey: 'dashboards'
  }, {
    key: 'owner',
    label: 'Owner',
    url: '/dashboards/owner',
    parentKey: 'dashboards'
  }, {
    key: 'customer',
    label: 'Customer',
    url: '/dashboards/customer',
    parentKey: 'dashboards'
  }]
}, {
  key: 'property',
  label: 'Property',
  icon: 'ri:community-line',
  children: [{
    key: 'property-grid',
    label: 'Property Grid',
    url: '/property/grid',
    parentKey: 'property'
  }, {
    key: 'property-list',
    label: 'Property List',
    url: '/property/list',
    parentKey: 'property'
  }, {
    key: 'property-details',
    label: 'Property Details',
    url: '/property/details',
    parentKey: 'property'
  }, {
    key: 'add-property',
    label: 'Add Property',
    url: '/property/add',
    parentKey: 'property'
  },    { key: 'property-categories', label: 'Categories/Types', url: '/properties/categories' },
   { key: 'vacancy-forecast', label: 'Vacancy Forecast', url: '/properties/vacancy-forecast' },
      { key: 'property-documents', label: 'Documents', url: '/properties/documents' }
]
}, {
  key: 'owner',
  label: 'Owner',
  icon: 'ri:group-line',
  children: [{
    key: 'agents-list-view',
    label: 'List View',
    url: '/agents/list-view',
    parentKey: 'agents'
  }, {
    key: 'agents-grid-view',
    label: 'Grid View',
    url: '/agents/grid-view',
    parentKey: 'agents'
  }, {
    key: 'agent-details',
    label: 'Agent Details',
    url: '/agents/details',
    parentKey: 'agents'
  }, {
    key: 'add-agent',
    label: 'Add Agent',
    url: '/agents/add',
    parentKey: 'agents'
  },]
}, {
  key: 'customers',
  label: 'Customers',
  icon: 'ri:contacts-book-3-line',
  children: [{
    key: 'list-view',
    label: 'List View',
    url: '/customers/list-view',
    parentKey: 'customers'
  }, {
    key: 'grid-view',
    label: 'Grid View',
    url: '/customers/grid-view',
    parentKey: 'customers'
  }, {
    key: 'customer-details',
    label: 'Customer Details',
    url: '/customers/details',
    parentKey: 'customers'
  }, {
    key: 'add-customer',
    label: 'Add Customer',
    url: '/customers/add',
    parentKey: 'customers'
  }]
}, {
  key: 'orders',
  label: 'Orders',
  icon: 'ri:home-office-line',
  url: '/orders'
}, 
{
    key: 'payments-finance',
    label: 'Payments & Finance',
    icon: 'ri:bank-card-line',
    children: [
      { key: 'rent-collections', label: 'Rent Collections', url: '/finance/rents' },
      { key: 'owner-payouts', label: 'Owner Payouts', url: '/finance/payouts' },
      { key: 'fees-commissions', label: 'Fees / Commissions', url: '/finance/fees' },
      { key: 'deposits', label: 'Deposits', url: '/finance/deposits' },
      { key: 'invoices-receipts', label: 'Invoices / Receipts', url: '/finance/invoices' },
      { key: 'tax-reports', label: 'Tax Reports', url: '/finance/taxes' },
      { key: 'late-fees', label: 'Late Fees / Penalties', url: '/finance/fines' }
    ]
  },

{
  key: 'management',
  label: 'Management',
  icon: 'ri:contacts-book-3-line',
  children: [
      {
      key: 'admin management',
      label: 'Admin Management',
      icon: 'ri:arrow-left-right-line',
      url: '/transactions'
    }, 
     {
  key: 'staff management',
  label: 'Staff Management',
  icon: 'ri:arrow-left-right-line',
  url: '/transactions'
},
  ]
},
{
  key: 'post',
  label: 'Post',
  icon: 'ri:news-line',
  children: [{
    key: 'post',
    label: 'Post',
    url: '/post',
    parentKey: 'post'
  }, {
    key: 'post-details',
    label: 'Post Details',
    url: '/post/details',
    parentKey: 'post'
  }, {
    key: 'create-post',
    label: 'Create Post',
    url: '/post/create',
    parentKey: 'post'
  }]
},
{
  key: 'settings',
  label: 'System & Frontend Settings',
  icon: 'ri:settings-3-line',
  url: '/settings'
},
  ,
{
  key: 'legal-compliance',
  label: 'Legal & Compliance',
  icon: 'ri:shield-check-line',
  url: '/compliance'
},
{
  key: 'ai-automation',
  label: 'AI & Automation',
  icon: 'ri:robot-line',
  url: '/ai-tools'
},
{
  key: 'document-vault',
  label: 'Document Vaults',
  icon: 'ri:folder-shield-line',
  url: '/vaults'
},
{
  key: 'finance-department',
  label: 'Finance Department',
  icon: 'ri:bank-line',
  url: '/finance-department'
},
{
  key: 'region-management',
  label: 'City/Region Manager',
  icon: 'ri:map-pin-line',
  url: '/regions'
},
{
  key: 'fraud-risk',
  label: 'Fraud & Risk',
  icon: 'ri:spy-line',
  url: '/fraud-detection'
},
{
  key: 'api-integration',
  label: 'API & Integration',
  icon: 'ri:plug-line',
  url: '/api-integrations'
},
{
  key: 'data-import-export',
  label: 'Data Import/Export',
  icon: 'ri:file-transfer-line',
  url: '/data-transfer'
}
];