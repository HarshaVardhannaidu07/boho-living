export const WHATSAPP_CONFIG = {
  phoneNumber: '919876543210', // Replace with actual WhatsApp Business number
  accountName: 'Boho PG',
  chatMessage: 'Hello! I would like to know more about Boho PG accommodations.',
  statusMessage: 'Typically replies within 1 hour',
  placeholder: 'Type a message...',
  darkMode: false,
};

export const FEATURES = [
  {
    id: 1,
    title: 'Premium Furnished Rooms',
    description: 'Beautifully designed rooms with modern aesthetics and comfort',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Lightning Fast WiFi',
    description: '100 Mbps unlimited high-speed internet for work and entertainment',
    icon: 'wifi',
  },
  {
    id: 3,
    title: 'Prime Location',
    description: 'Minutes away from IT parks, malls, and public transport',
    icon: 'location',
  },
  {
    id: 4,
    title: 'Flexible Tenancy',
    description: 'Monthly, quarterly, or yearly plans tailored to your needs',
    icon: 'calendar',
  },
];

// Room categories with actual images
export const ROOM_CATEGORIES = {
  single: {
    title: 'Single Person Room',
    description: 'Perfect for individuals seeking privacy and comfort',
    price: '₹8,000 - ₹10,000',
    images: [
      '/Single-Person-Room-1.jpg',
      '/Single-Person-Room-2.jpg',
      '/Single-Person-Room-3.jpg',
      '/Single-Person-Room-4.jpg',
      '/Single-Person-Room-5.jpg',
      '/Single-Person-Room-6.jpg',
    ],
    features: ['Private Room', 'Attached Bathroom', 'AC', 'Study Desk', 'Wardrobe', 'LCD TV'],
  },
  doubleType2: {
    title: '2 Sharing Room - Type 1',
    description: 'Spacious double occupancy with modern amenities',
    price: '₹5,500 - ₹7,000',
    images: [
      '/2Sharingtype1-1.jpg',
      '/2Sharingtype1-2.jpg',
      '/2Sharingtype1-3.jpg',
      '/2Sharingtype1-4.jpg',
      '/2Sharingtype1-5.jpg',
      '/2Sharingtype1-6.jpg',
    ],
    features: ['Shared Room', 'Attached Bathroom', 'AC', 'Study Desks', 'Wardrobes', 'LCD TV'],
  },
  doubleType3: {
    title: '2 Sharing Room - Type 2',
    description: 'Comfortable sharing space with all essentials',
    price: '₹5,000 - ₹6,500',
    images: [
      '/2Sharingtype2 -1.jpg',
      '/2Sharingtype2-2.jpg',
      '/2Sharingtype2-3.jpg',
      '/2Sharingtype2-4.jpg',
      '/2Sharingtype2-5.jpg',
      '/2Sharingtype2-6.jpg',
    ],
    features: ['Shared Room', 'Common Bathroom', 'AC', 'Study Space', 'Storage', 'LCD TV'],
  },
  couple: {
    title: 'Couple Sharing Room',
    description: 'Private space designed for couples',
    price: '₹9,000 - ₹12,000',
    images: [
      '/CoupleSharing-1.jpg',
      '/CoupleSharing-2.jpg',
      '/CoupleSharing-3.jpg',
      '/CoupleSharing-4.jpg',
      '/CoupleSharing-5.jpg',
    ],
    features: ['Private Room', 'Attached Bathroom', 'AC', 'Double Bed', 'Wardrobe', 'LCD TV'],
  },
};

// Updated amenities with icon mappings
export const AMENITIES = [
  {
    id: 1,
    title: 'Sharing Basis',
    description: '1, 2, 3, 4 Sharing Options',
    icon: 'users',
  },
  {
    id: 2,
    title: 'LCD TVs',
    description: 'In All Rooms',
    icon: 'tv',
  },
  {
    id: 3,
    title: 'Free Unlimited WiFi',
    description: 'High-Speed Internet',
    icon: 'wifi',
  },
  {
    id: 4,
    title: 'Hygienic Food',
    description: 'South & North Indian',
    icon: 'utensils',
  },
  {
    id: 5,
    title: 'Parking Facility',
    description: 'Secure Parking',
    icon: 'parking',
  },
  {
    id: 6,
    title: '24hrs Security',
    description: 'CCTV & Guard',
    icon: 'shield',
  },
  {
    id: 7,
    title: 'Room Cleaning',
    description: 'Daily Housekeeping',
    icon: 'broom',
  },
  {
    id: 8,
    title: 'More Room Space',
    description: 'Spacious Interiors',
    icon: 'expand',
  },
  {
    id: 9,
    title: 'Washing Machine',
    description: 'Laundry Facility',
    icon: 'washer',
  },
  {
    id: 10,
    title: '24hrs Power Backup',
    description: 'Uninterrupted Power',
    icon: 'bolt',
  },
];

export const ROOM_TYPES = [
  {
    id: 1,
    type: 'Single Occupancy',
    price: '₹8,000',
    period: 'per month',
    features: ['Private Room', 'Attached Bathroom', 'AC', 'Study Desk', 'Wardrobe', 'LCD TV'],
    popular: false,
  },
  {
    id: 2,
    type: 'Double Sharing',
    price: '₹6,000',
    period: 'per month',
    features: ['Shared Room', 'Attached Bathroom', 'AC', 'Study Desks', 'Wardrobes', 'LCD TV'],
    popular: true,
  },
  {
    id: 3,
    type: 'Couple Sharing',
    price: '₹10,000',
    period: 'per month',
    features: ['Private Room', 'Attached Bathroom', 'AC', 'Double Bed', 'Wardrobe', 'LCD TV'],
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer, Google',
    text: 'Best PG experience in Bangalore! The rooms are spacious, clean, and the food is amazing. The community here feels like family.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'MBA Student, IIM',
    text: 'Clean, safe, and value for money. Perfect location for my college. The management is super responsive and professional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    role: 'Product Designer',
    text: 'The interiors are stunning! WiFi is blazing fast, and I have made so many friends here. Highly recommend!',
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: 'What is included in the rent?',
    answer: 'Rent includes fully furnished room, WiFi, electricity (up to 100 units), water, housekeeping, and access to all common amenities. Food is optional.',
  },
  {
    id: 2,
    question: 'Is there a security deposit?',
    answer: 'Yes, we require a refundable security deposit of 1 month rent, which will be returned when you vacate (subject to room condition).',
  },
  {
    id: 3,
    question: 'Can I visit before booking?',
    answer: 'Absolutely! We encourage property visits. Contact us to schedule a free tour of the facility and rooms.',
  },
  {
    id: 4,
    question: 'What is the notice period?',
    answer: 'We require a 1-month notice period before vacating. Early exit may result in security deposit deduction.',
  },
  {
    id: 5,
    question: 'Are meals provided?',
    answer: 'Yes, we provide home-cooked vegetarian meals (breakfast, lunch, dinner) at an additional cost. You can opt in/out monthly.',
  },
];

export const CONTACT_INFO = {
  phone: '+91-9876543210',
  email: 'hello@bohopg.com',
  address: 'HSR Layout, Sector 1, Bangalore, Karnataka 560102',
};
