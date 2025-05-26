import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  {
    question: 'Is Rabat a good place to learn how to surf?',
    answer: 'Yes! Rabat offers consistent waves and beginner-friendly beach breaks, making it a perfect destination to learn how to surf.',
  },
  {
    question: 'What’s the best season for surfing in Rabat?',
    answer: 'The best surf season in Rabat is from October to April, when Atlantic swells are strongest and most consistent.',
  },
  {
    question: 'Do I need to bring my own surfboard?',
    answer: 'Not necessarily. Most surf schools and camps in Rabat offer quality surfboard rentals included with lessons.',
  },
  {
    question: 'Are there surf schools in Rabat for all skill levels?',
    answer: 'Absolutely. Whether you’re a beginner, intermediate, or advanced surfer, Rabat has coaches and programs tailored to every level.',
  },
  {
    question: 'Are the surf spots in Rabat crowded?',
    answer: 'Compared to major surf destinations, Rabat’s surf spots are relatively uncrowded, especially on weekdays.',
  },
  {
    question: 'Is it safe to surf in Rabat as a solo traveler?',
    answer: 'Yes. Rabat is generally safe for solo travelers, and the surf community is welcoming and supportive.',
  },
  {
    question: 'Can I take yoga classes with my surf training?',
    answer: 'Yes, many surf camps in Rabat include yoga sessions to complement surf training and improve flexibility and balance.',
  },
  {
    question: 'What should I wear for surfing in Rabat?',
    answer: 'A wetsuit is recommended from October to May due to cooler water temperatures. In summer, a rashguard or swimsuit is usually enough.',
  },
].map((faq, index) => ({
  id: `faq-${index + 1}`,
  ...faq,
}));


export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
