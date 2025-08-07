import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date';
import properties1 from '@/assets/images/properties/p-1.jpg';
import properties10 from '@/assets/images/properties/p-10.jpg';
import properties2 from '@/assets/images/properties/p-2.jpg';
import properties3 from '@/assets/images/properties/p-3.jpg';
import properties4 from '@/assets/images/properties/p-4.jpg';
import properties5 from '@/assets/images/properties/p-5.jpg';
import properties6 from '@/assets/images/properties/p-6.jpg';
import properties7 from '@/assets/images/properties/p-7.jpg';
import properties8 from '@/assets/images/properties/p-8.jpg';
import properties9 from '@/assets/images/properties/p-9.jpg';
import mastercard from '@/assets/images/card/mastercard.svg';
import paypal from '@/assets/images/card/paypal.svg';
import visa from '@/assets/images/card/visa.svg';
import { currency } from '@/context/constants';
export const userData = [{
  id: '1',
  name: 'Michael A. Miner',
  avatar: avatar1,
  languages: ['English', 'German', 'Spanish'],
  email: 'daavidnumminen@teleworm.us',
  contact: '+231 06-75820711',
  status: 'Active',
  mutualCount: 43,
  message: 'How are you today?',
  location: 'California, USA',
  time: addOrSubtractMinutesFromDate(10),
  chatIcon: 'solar:hand-shake-bold-duotone',
  activityStatus: 'online',
  address: 'Schoolstraat 161 5151 HH Drunen',
  emailMessage: 'Thank you all for your hard ...'
}, {
  id: '2',
  name: 'Theresa T. Brose',
  avatar: avatar2,
  languages: ['English', 'German', 'Spanish'],
  email: 'sinikkapenttinen@dayrep.com',
  contact: '+231 47-23456789',
  status: 'Active',
  mutualCount: 856,
  message: "Hey! a reminder for tommorow's meeting...",
  location: 'New Jersey, USA',
  time: addOrSubtractMinutesFromDate(20),
  activityStatus: 'online',
  address: 'Jean Racinelaan 48 5629 PK Eindhoven',
  emailMessage: 'In recognition of your achieve...'
}, {
  id: '3',
  name: 'James L. Erickson',
  avatar: avatar3,
  languages: ['English', 'German', 'Spanish'],
  email: 'jerepalmu@rhyta.com',
  contact: '+231 73-34567890',
  status: 'Inactive',
  mutualCount: 52,
  time: addOrSubtractMinutesFromDate(50),
  location: 'California, USA',
  message: "Hello! I just got your assignment, everything's alright, exce",
  activityStatus: 'typing',
  address: 'Alkmenehof 124 2728 KA Zoetermeer',
  emailMessage: 'Additionally, I would like to remind eve...'
}, {
  id: '4',
  name: 'Lily W. Wilson',
  avatar: avatar4,
  languages: ['English', 'German', 'Spanish'],
  email: 'ullanuorela@rhyta.com',
  contact: '+231 45-45678901',
  status: 'Active',
  time: addOrSubtractMinutesFromDate(100),
  mutualCount: 12,
  location: 'New York, USA',
  chatIcon: 'solar:confetti-minimalistic-bold-duotone',
  message: "Are we going to have this week's planning meeting today?",
  activityStatus: 'typing',
  address: 'Oudegracht 135 3511 NJ Utrecht',
  emailMessage: 'After reviewing the current progres...'
}, {
  id: '5',
  name: 'Sarah M. Brooks',
  avatar: avatar5,
  languages: ['English', 'German', 'Spanish'],
  email: 'tiiakarppinen@teleworm.us',
  contact: '+231 16-56789012',
  status: 'Inactive',
  mutualCount: 548,
  location: 'California, USA',
  time: addOrSubtractMinutesFromDate(150),
  message: 'Please check this template...',
  activityStatus: 'offline',
  address: 'Willem de Zwijgerlaan 183 2315 AT Leiden',
  emailMessage: 'we have decided to adjust the deadlin...'
}, {
  id: '6',
  name: 'Joe K. Hall',
  avatar: avatar6,
  languages: ['English', 'German', 'Spanish'],
  email: 'harlandrorsini@dayrep.com',
  contact: '+231 82-67890123',
  status: 'Active',
  mutualCount: 0,
  location: 'California, USA',
  time: addOrSubtractMinutesFromDate(200),
  message: 'Are free for 10 minutes? would like to discuss something...',
  activityStatus: 'offline',
  address: 'Bongerd 116 6367 CL Voerendaal',
  emailMessage: "We'd like to thank you for being su..."
}, {
  id: '7',
  name: 'Robert V. Leavitt',
  avatar: avatar7,
  languages: ['English', 'German', 'Spanish'],
  email: 'robertvleavitt@dayrep.com',
  contact: '+787 361-318-4753',
  status: 'Active',
  mutualCount: 856,
  hasRequested: true,
  location: 'California, USA',
  chatIcon: 'solar:hand-shake-bold-duotone',
  time: addOrSubtractMinutesFromDate(250),
  message: 'How are you?',
  activityStatus: 'typing',
  address: 'Stockert Hollow Road Redmond, WA 98052',
  emailMessage: 'February, you will be paid to your nomina...'
}, {
  id: '8',
  name: 'Lydia Anderson',
  avatar: avatar8,
  languages: ['English', 'German', 'Spanish'],
  email: 'lydiajanderson@dayrep.com',
  contact: '+787 602-851-1066',
  message: 'Whats going on?',
  status: 'Inactive',
  mutualCount: 52,
  location: 'California, USA',
  time: addOrSubtractMinutesFromDate(300),
  activityStatus: 'online',
  address: 'Schoolstraat 161 5151 HH Drunen',
  emailMessage: `${currency}250 cash reward. This will be paid out...`
}, {
  id: '9',
  name: 'Sarah Martinez',
  avatar: avatar9,
  languages: ['English', 'German', 'Spanish'],
  email: 'sarahjmartinez@rhyta.com',
  contact: '+231 45-45678901',
  status: 'Active',
  time: addOrSubtractMinutesFromDate(350),
  mutualCount: 12,
  location: 'California, USA',
  message: 'Would you like to join us?',
  activityStatus: 'offline',
  address: 'Schoolstraat 161 5151 HH Drunen',
  emailMessage: 'Thank you all for your hard ...'
}];
export const transactionData = [{
  id: '201',
  userId: '1',
  propertyId: '101',
  invoiceNumber: 'IN-4563',
  purchaseDate: addOrSubtractDaysFromDate(50),
  paymentType: 'Mastercard',
  paymentStatus: 'Completed',
  amount: '45,842',
  orderId: 'ORD-75234',
  agentName: 'Michael A. Miner',
  amountStatus: 'Paid',
  investedProperty: 'W. straat 102 DK Deventer',
  paymentMethod: {
    card: mastercard,
    name: 'Mastercard **** 3467'
  },
  description: 'Commisions',
  status: 'Cr'
}, {
  id: '202',
  userId: '2',
  propertyId: '102',
  purchaseDate: addOrSubtractDaysFromDate(150),
  amount: '78,483',
  invoiceNumber: 'IN-3728',
  paymentType: 'Visa',
  paymentStatus: 'Cancel',
  orderId: 'ORD-54222',
  agentName: 'Theresa T. Brose',
  amountStatus: 'Paid',
  investedProperty: 'Isaac Tirionplein 100',
  paymentMethod: {
    card: visa,
    name: 'Visa card **** 4722'
  },
  description: 'Affiliates',
  status: 'Cr'
}, {
  id: '203',
  userId: '3',
  propertyId: '103',
  purchaseDate: addOrSubtractDaysFromDate(450),
  amount: '83,644',
  invoiceNumber: 'IN-8265',
  paymentType: 'Paypal',
  paymentStatus: 'Completed',
  orderId: 'ORD-63111',
  agentName: 'Walter L. Calab',
  amountStatus: 'Unpaid',
  investedProperty: '123 Maple St, 456 Oak Ave',
  paymentMethod: {
    card: mastercard,
    name: 'Mastercard **** 7263'
  },
  description: 'Grocery',
  status: 'Dr'
}, {
  id: '204',
  userId: '4',
  propertyId: '104',
  purchaseDate: addOrSubtractDaysFromDate(170),
  amount: '94,305',
  invoiceNumber: 'IN-3728',
  paymentType: 'Mastercard',
  paymentStatus: 'Pending',
  orderId: 'ORD-84623',
  agentName: 'Olive Mize',
  amountStatus: 'Paid',
  investedProperty: '3822 DT Amersfoort',
  paymentMethod: {
    card: paypal,
    name: 'gailsoneil31@rhyta.com'
  },
  description: 'Refunds',
  status: 'Cr'
}, {
  id: '205',
  userId: '5',
  propertyId: '105',
  purchaseDate: addOrSubtractDaysFromDate(120),
  invoiceNumber: 'IN-8945',
  amount: '42,561',
  paymentType: 'Visa',
  paymentStatus: 'Cancel',
  orderId: 'ORD-75234',
  agentName: 'Christa Sardina',
  amountStatus: 'Unpaid',
  investedProperty: '3822 DT Amersfoort',
  paymentMethod: {
    card: visa,
    name: 'Visa card **** 8263'
  },
  description: 'Bill Payments',
  status: 'Dr'
}, {
  id: '206',
  userId: '6',
  propertyId: '106',
  invoiceNumber: 'IN-0987',
  purchaseDate: addOrSubtractDaysFromDate(752),
  amount: '25,671',
  paymentType: 'Paypal',
  paymentStatus: 'Completed',
  orderId: 'ORD-75234',
  agentName: 'Darren Rivera',
  amountStatus: 'Unpaid',
  investedProperty: '3181 BE Rozenburg',
  paymentMethod: {
    card: paypal,
    name: 'hughcrobinson@rhyta.com'
  },
  description: 'Electricity',
  status: 'Dr'
}, {
  id: '207',
  userId: '7',
  propertyId: '107',
  purchaseDate: addOrSubtractDaysFromDate(170),
  amount: '94,305',
  invoiceNumber: 'IN-3728',
  paymentType: 'Mastercard',
  paymentStatus: 'Pending',
  orderId: 'ORD-84623',
  agentName: 'Robert V. Leavitt',
  amountStatus: 'Paid',
  investedProperty: 'Julianastraat ZX 7031',
  paymentMethod: {
    card: mastercard,
    name: 'Mastercard **** 9200'
  },
  description: 'Interest',
  status: 'Cr'
}, {
  id: '208',
  userId: '8',
  propertyId: '108',
  purchaseDate: addOrSubtractDaysFromDate(150),
  amount: '78,483',
  invoiceNumber: 'IN-3728',
  paymentType: 'Visa',
  paymentStatus: 'Cancel',
  orderId: 'ORD-54222',
  agentName: 'Lydia Anderson',
  amountStatus: 'Pending',
  investedProperty: '2561 DB Den Haag',
  paymentMethod: {
    card: visa,
    name: 'Visa card **** 8940'
  },
  description: 'Refunds',
  status: 'Cr'
}, {
  id: '209',
  userId: '9',
  propertyId: '109',
  purchaseDate: addOrSubtractDaysFromDate(450),
  amount: '83,644',
  invoiceNumber: 'IN-8265',
  paymentType: 'Paypal',
  paymentStatus: 'Completed',
  orderId: 'ORD-63111',
  agentName: 'Michael A. Miner',
  amountStatus: 'Pending',
  investedProperty: 'W. straat 102 DK Deventer',
  paymentMethod: {
    card: mastercard,
    name: 'Mastercard **** 3467'
  },
  description: 'Shopping',
  status: 'Dr'
}];
export const propertyData = [{
  id: '101',
  name: 'Dvilla Residences Batu',
  location: '4604 , Philli Lane Kiowa',
  image: properties1,
  icon: 'solar:home-bold-duotone',
  beds: 5,
  bath: 4,
  size: 1400,
  flor: 3,
  price: '8,930',
  propertyType: 'Residences',
  country: 'France',
  type: 'Rent',
  variant: 'success',
  save: true
}, {
  id: '102',
  name: 'PIK Villa House',
  location: '127, Boulevard Cockeysville',
  image: properties2,
  icon: 'solar:home-bold-duotone',
  beds: 6,
  bath: 5,
  size: 1700,
  flor: 3,
  price: '60,691',
  propertyType: 'Villas',
  country: 'Bermuda',
  type: 'Sold',
  variant: 'danger'
}, {
  id: '103',
  name: 'Tungis Luxury',
  location: '900 , Creside WI 54913',
  image: properties3,
  icon: 'solar:home-bold-duotone',
  beds: 4,
  bath: 3,
  size: 1200,
  flor: 2,
  price: '70,245',
  propertyType: 'Bungalow',
  country: 'Australia',
  type: 'Sale',
  variant: 'warning',
  save: true
}, {
  id: '104',
  name: 'Luxury Apartment',
  location: '223 , Creside Santa Maria',
  image: properties4,
  icon: 'solar:buildings-3-bold-duotone',
  beds: 2,
  bath: 2,
  size: 900,
  flor: 1,
  price: '5,825',
  propertyType: 'Apartment',
  country: 'France',
  type: 'Rent',
  variant: 'success',
  save: false
}, {
  id: '105',
  name: 'Weekend Villa MBH',
  location: '980, Jim Rosa Lane Dublin',
  image: properties5,
  icon: 'solar:home-bold-duotone',
  beds: 5,
  bath: 5,
  size: 1900,
  flor: 2,
  price: '90,674',
  propertyType: 'Villas',
  country: 'U.S.A',
  type: 'Sale',
  variant: 'warning',
  save: false
}, {
  id: '106',
  name: 'Luxury Penthouse',
  location: 'Sumner Street Los Angeles',
  image: properties6,
  icon: 'solar:home-bold-duotone',
  beds: 7,
  bath: 6,
  size: 2000,
  flor: 1,
  price: '10,500',
  propertyType: 'Penthouse',
  country: 'Greenland',
  type: 'Rent',
  variant: 'success',
  save: true
}, {
  id: '107',
  name: 'Ojiag Duplex House',
  location: '24 Hanover, New York',
  image: properties7,
  icon: 'solar:buildings-3-bold-duotone',
  beds: 3,
  bath: 3,
  size: 1300,
  flor: 2,
  price: '75,341',
  propertyType: 'Apartment',
  country: 'France',
  type: 'Sold',
  variant: 'danger'
}, {
  id: '108',
  name: 'Luxury Bungalow Villas',
  location: 'Khale Florence, SC 219',
  image: properties8,
  icon: 'solar:home-bold-duotone',
  beds: 4,
  bath: 3,
  size: 1200,
  flor: 1,
  price: '54,230',
  propertyType: 'Bungalow',
  country: 'France',
  type: 'Sale',
  variant: 'warning',
  save: false
}, {
  id: '109',
  name: 'Duplex Bungalow',
  location: '25, Willison Street Becker',
  image: properties9,
  icon: 'solar:home-bold-duotone',
  beds: 3,
  bath: 3,
  size: 1800,
  flor: 3,
  price: '14,564',
  propertyType: 'Residences',
  country: 'Canada',
  type: 'Rent',
  variant: 'success',
  save: false
}, {
  id: '110',
  name: 'Woodis B. Apartment',
  location: 'Bungalow Road Niobrara',
  image: properties10,
  icon: 'solar:buildings-3-bold-duotone',
  beds: 4,
  bath: 3,
  size: 1700,
  flor: 6,
  price: '34,341',
  propertyType: 'Apartment',
  country: 'U.S.A',
  type: 'Sold',
  variant: 'success'
}];
export const agentData = [{
  id: '301',
  userId: '1',
  experience: 5,
  address: 'Lincoln Drive Harrisburg, PA 17101 U.S.A',
  date: addOrSubtractDaysFromDate(20),
  properties: 243
}, {
  id: '302',
  userId: '2',
  experience: 2,
  address: 'Boulevard Cockeysville TX 75204',
  date: addOrSubtractDaysFromDate(96),
  properties: 451
}, {
  id: '303',
  userId: '3',
  experience: 7,
  address: 'Woodside Circle Panama City, FL 32401',
  date: addOrSubtractDaysFromDate(120),
  properties: 190
}, {
  id: '304',
  userId: '4',
  experience: 3,
  address: 'Emily Drive Sumter, SC 29150',
  date: addOrSubtractDaysFromDate(170),
  properties: 276
}, {
  id: '305',
  userId: '5',
  experience: 4,
  address: 'Cmans Lane Albuquerque, NM 87109',
  date: addOrSubtractDaysFromDate(10),
  properties: 257
}, {
  id: '306',
  userId: '6',
  experience: 5,
  address: '465 Chapmans Lane Albuquerque,',
  date: addOrSubtractDaysFromDate(168),
  properties: 342
}, {
  id: '307',
  userId: '7',
  experience: 2,
  address: 'Stockert Hollow Road Redmond, WA 98052',
  date: addOrSubtractDaysFromDate(245),
  properties: 120
}, {
  id: '308',
  userId: '8',
  experience: 3,
  address: 'Conaway Street Bloomington, IN 47408',
  date: addOrSubtractDaysFromDate(664),
  properties: 266
}, {
  id: '309',
  userId: '9',
  experience: 5,
  address: '500 Logan Lane Denver, CO 80220',
  date: addOrSubtractDaysFromDate(64),
  properties: 128
}];
export const customerData = [{
  id: '401',
  userId: '1',
  propertyType: 'Residential',
  interestedProperties: '123 Maple St, 456 Oak Ave',
  customerStatus: 'Interested',
  date: addOrSubtractDaysFromDate(50),
  status: 'Available',
  propertyView: 231,
  propertyOwn: 27,
  invest: '928,128'
}, {
  id: '402',
  userId: '2',
  propertyType: 'Commercial',
  interestedProperties: '789 Pine Blvd',
  customerStatus: 'Under Review',
  date: addOrSubtractDaysFromDate(150),
  status: 'Available',
  propertyView: 134,
  propertyOwn: 13,
  invest: '435,892'
}, {
  id: '403',
  userId: '3',
  propertyType: 'Residential',
  interestedProperties: '101 Birch Ct, 202 Cedar Ln',
  customerStatus: 'Follow-up',
  date: addOrSubtractDaysFromDate(70),
  status: 'Available',
  propertyView: 301,
  propertyOwn: 15,
  invest: '743,120'
}, {
  id: '404',
  userId: '4',
  propertyType: 'Residential',
  interestedProperties: '303 Elm St',
  customerStatus: 'Interested',
  date: addOrSubtractDaysFromDate(50),
  status: 'Unavailable',
  propertyView: 109,
  propertyOwn: 7,
  invest: '635,812'
}, {
  id: '405',
  userId: '5',
  propertyType: 'Industrial',
  interestedProperties: '404 Walnut Rd',
  customerStatus: 'Follow-up',
  date: addOrSubtractDaysFromDate(240),
  status: 'Available',
  propertyView: 142,
  propertyOwn: 18,
  invest: '733,291'
}, {
  id: '406',
  userId: '6',
  propertyType: 'Residential',
  interestedProperties: '505 Spruce St',
  customerStatus: 'Interested',
  date: addOrSubtractDaysFromDate(340),
  status: 'Unavailable',
  propertyView: 109,
  propertyOwn: 10,
  invest: '831,760'
}, {
  id: '407',
  userId: '7',
  propertyType: 'Commercial',
  interestedProperties: '606 Fir Ave',
  customerStatus: 'Under Review',
  date: addOrSubtractDaysFromDate(740),
  status: 'Available',
  propertyView: 231,
  propertyOwn: 27,
  invest: '928,128'
}, {
  id: '408',
  userId: '8',
  propertyType: 'Residential',
  interestedProperties: '808 Willow Dr, 909 Aspen Ln',
  customerStatus: 'Interested',
  date: addOrSubtractDaysFromDate(440),
  status: 'Available',
  propertyView: 231,
  propertyOwn: 27,
  invest: '928,128'
}];
export const customerReviewsData = [{
  id: '501',
  userId: '1',
  propertyId: '101',
  rating: 4.5,
  date: addOrSubtractDaysFromDate(20),
  reviewStatus: 'Published',
  review: {
    title: 'Best For Family Leaving',
    description: 'The property was exactly as described and the buying process was smooth and hassle-free.'
  }
}, {
  id: '502',
  userId: '2',
  propertyId: '102',
  rating: 3.5,
  date: addOrSubtractDaysFromDate(70),
  reviewStatus: 'Pending',
  review: {
    title: 'Best In Low Price',
    description: 'Great experience overall, but there were a few delays in communication.'
  }
}, {
  id: '503',
  userId: '3',
  propertyId: '103',
  rating: 4.3,
  date: addOrSubtractDaysFromDate(150),
  reviewStatus: 'Published',
  review: {
    title: 'Agent Is Good',
    description: 'Fantastic service and very knowledgeable agent. Highly recommend!'
  }
}, {
  id: '504',
  userId: '4',
  propertyId: '104',
  rating: 3.1,
  date: addOrSubtractDaysFromDate(300),
  reviewStatus: 'Pending',
  review: {
    title: 'Renovation Requirement',
    description: 'Good experience, but the property needed more repairs than expected.'
  }
}, {
  id: '505',
  userId: '5',
  propertyId: '105',
  rating: 4.4,
  date: addOrSubtractDaysFromDate(452),
  reviewStatus: 'Published',
  review: {
    title: 'Best Property',
    description: 'Excellent service! The agent was very helpful and responsive throughout the process.'
  }
}, {
  id: '506',
  userId: '6',
  propertyId: '106',
  rating: 2.5,
  date: addOrSubtractDaysFromDate(178),
  reviewStatus: 'Pending',
  review: {
    title: 'Bed Experience',
    description: 'Average experience. The property was good, but the process took longer than anticipated.'
  }
}, {
  id: '507',
  userId: '7',
  propertyId: '107',
  rating: 4.5,
  date: addOrSubtractDaysFromDate(249),
  reviewStatus: 'Published',
  review: {
    title: 'Wonderful Property',
    description: "Outstanding service and a wonderful property. Couldn't be happier!"
  }
}];
export const timelineData = {
  Today: [{
    title: 'Completed UX design project for our client',
    description: 'Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?',
    important: true
  }, {
    title: 'Yes! We are celebrating our first admin release.',
    description: 'Consectetur adipisicing elit. Iusto, optio, dolorum John deon provident.'
  }, {
    title: 'We released new version of our theme Rasket.',
    description: '3 new photo Uploaded on facebook fan page'
  }],
  Yesterday: [{
    title: 'We have archieved 25k sales in our themes',
    description: 'Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?'
  }, {
    title: 'Yes! We are celebrating our first admin release.',
    description: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson.'
  }]
  // '5 days ago': [
  //   {
  //     title: 'Join new team member Alex Smith',
  //     description:
  //       'Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for building usable, functional & pretty web applications.',
  //   },
  //   {
  //     title: 'First release of Reback admin dashboard template',
  //     description: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.',
  //   },
  // ],
};
export const pricingData = [{
  id: '1',
  name: 'Free Pack',
  price: 0,
  features: ['5 GB Storage', '100 GB Bandwidth', '1 Domain', 'No Support', '24x7 Support', '1 User']
}, {
  id: '2',
  name: 'Professional Pack',
  price: 19,
  features: ['50 GB Storage', '900 GB Bandwidth', '1 Domain', 'Email Support', '24x7 Support', '5 User'],
  isPopular: true,
  subscribed: true
}, {
  id: '3',
  name: 'Business Pack',
  price: 29,
  features: ['500 GB Storage', '2.5 TB Bandwidth', '5 Domain', 'Email Support', '24x7 Support', '10 User']
}, {
  id: '4',
  name: 'EnterPrice Pack',
  price: 29,
  features: ['2 TB Storage', 'Unlimited Bandwidth', '50 Domain', 'Email Support', '24x7 Support', 'Unlimited User']
}];
export const projectsData = [{
  id: '1',
  projectName: 'Zelogy',
  client: 'Daniel Olsen',
  teamMembers: [avatar2, avatar3, avatar4],
  deadlineDate: new Date('12/4/2024'),
  progressValue: 33,
  variant: 'primary'
}, {
  id: '2',
  projectName: 'Shiaz',
  client: 'Jack Roldan',
  teamMembers: [avatar1, avatar5],
  deadlineDate: new Date('10/4/2024'),
  progressValue: 74,
  variant: 'success'
}, {
  id: '3',
  projectName: 'Holderick',
  client: 'Betty Cox',
  teamMembers: [avatar5, avatar2, avatar3],
  deadlineDate: new Date('31/3/2024'),
  progressValue: 50,
  variant: 'warning'
}, {
  id: '4',
  projectName: 'Feyvux',
  client: 'Carlos Johnson',
  teamMembers: [avatar3, avatar7, avatar6],
  deadlineDate: new Date('25/3/2024'),
  progressValue: 92,
  variant: 'primary'
}, {
  id: '5',
  projectName: 'Xavlox',
  client: 'Lorraine Cox',
  teamMembers: [avatar7],
  deadlineDate: new Date('22/3/2024'),
  progressValue: 48,
  variant: 'danger'
}, {
  id: '6',
  projectName: 'Mozacav',
  client: 'Delores Young',
  teamMembers: [avatar3, avatar4, avatar2],
  deadlineDate: new Date('15/3/2024'),
  progressValue: 21,
  variant: 'primary'
}];
export const dataTableRecords = [{
  id: '11',
  name: 'Jonathan',
  email: 'jonathan@example.com',
  position: 'Senior Implementation Architect',
  company: 'Hauck Inc',
  country: 'Holy See'
}, {
  id: '12',
  name: 'Harold',
  email: 'harold@example.com',
  position: 'Forward Creative Coordinator',
  company: 'Metz Inc',
  country: 'Iran'
}, {
  id: '13',
  name: 'Shannon',
  email: 'shannon@example.com',
  position: 'Legacy Functionality Associate',
  company: 'Zemlak Group',
  country: 'South Georgia'
}, {
  id: '14',
  name: 'Robert',
  email: 'robert@example.com',
  position: 'Product Accounts Technician',
  company: 'Hoeger',
  country: 'San Marino'
}, {
  id: '15',
  name: 'Noel',
  email: 'noel@example.com',
  position: 'Customer Data Director',
  company: 'Howell - Rippin',
  country: 'Germany'
}, {
  id: '16',
  name: 'Traci',
  email: 'traci@example.com',
  position: 'Corporate Identity Director',
  company: 'Koelpin - Goldner',
  country: 'Vanuatu'
}, {
  id: '17',
  name: 'Kerry',
  email: 'kerry@example.com',
  position: 'Lead Applications Associate',
  company: 'Feeney, Langworth and Tremblay',
  country: 'Niger'
}, {
  id: '18',
  name: 'Patsy',
  email: 'patsy@example.com',
  position: 'Dynamic Assurance Director',
  company: 'Streich Group',
  country: 'Niue'
}, {
  id: '19',
  name: 'Cathy',
  email: 'cathy@example.com',
  position: 'Customer Data Director',
  company: 'Ebert, Schamberger and Johnston',
  country: 'Mexico'
}, {
  id: '20',
  name: 'Tyrone',
  email: 'tyrone@example.com',
  position: 'Senior Response Liaison',
  company: 'Raynor, Rolfson and Daugherty',
  country: 'Qatar'
}];