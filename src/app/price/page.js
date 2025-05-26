import TravelPriceView from 'src/sections/_elearning/view/elearning-price-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Prices & Packages | Surf in Rabat - Surf Lessons & Coaching in Morocco',
  description:
    'Explore our surf lesson prices and coaching packages in Rabat, Morocco. Whether you’re a beginner or advanced surfer, Surf in Rabat offers flexible and affordable options.',
  keywords: [
    'Surf in Rabat prices',
    'Morocco surf lesson cost',
    'Surf coaching packages Rabat',
    'Surf school Morocco pricing',
    'Private surf lessons Rabat',
    'Surf in Morocco packages',
    'Affordable surf lessons',
    'Chadi Lahrioui surf rates',
  ],
  authors: [{ name: 'Surf in Rabat' }],
  creator: 'Surf in Rabat',
  publisher: 'Surf in Rabat',
  robots: 'index, follow',
  metadataBase: new URL('https://surfinrabat.com'), // replace with your domain
  alternates: {
    canonical: '/prices',
  },
  openGraph: {
    title: 'Prices & Packages | Surf in Rabat - Surf Lessons & Coaching in Morocco',
    description:
      'Choose from a variety of surf packages designed for all skill levels. View pricing and details for group or private surf lessons in Rabat.',
    url: 'https://surfinrabat.com/prices', // update if path differs
    siteName: 'Surf in Rabat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://surfinrabat.com/og-prices.jpg', // replace with your image
        width: 1200,
        height: 630,
        alt: 'Surf in Rabat Prices and Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prices & Packages | Surf in Rabat - Surf Lessons & Coaching in Morocco',
    description:
      'Affordable and flexible surf packages in Rabat. Check out our group, private, and multi-day coaching options.',
    images: ['https://surfinrabat.com/og-prices.jpg'], // match OpenGraph image
  },
};

export default function TravelPricePage() {
  return <TravelPriceView />;
}
