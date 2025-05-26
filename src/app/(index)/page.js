import ElearningLandingView from 'src/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Surf in Rabat | Private Coaching & Surf School in Morocco',
  description:
    'Discover Surf in Rabat — the ultimate surf school and private coaching experience in Morocco, led by national champion Chadi Lahrioui. Perfect for beginners, intermediates, and advanced surfers.',
  keywords: [
    'Surf in Rabat',
    'Surf Morocco',
    'Surf school Rabat',
    'Surf lessons Morocco',
    'Chadi Lahrioui',
    'Private surf coach',
    'Surf coaching Rabat',
    'Learn to surf Morocco',
    'Rabat surf guide',
  ],
  authors: [{ name: 'Surf in Rabat' }],
  creator: 'Surf in Rabat',
  publisher: 'Surf in Rabat',
  robots: 'index, follow',
  metadataBase: new URL('https://surfinrabat.com'), // replace with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Surf in Rabat | Private Coaching & Surf School in Morocco',
    description:
      'Join Surf in Rabat for top-tier surfing lessons guided by national surf champion Chadi Lahrioui. Perfect waves, all skill levels, and yoga-infused coaching.',
    url: 'https://surfinrabat.com', // replace with your domain
    siteName: 'Surf in Rabat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Surfing in Rabat with Chadi Lahrioui',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf in Rabat | Private Coaching & Surf School in Morocco',
    description:
      'Surf in Rabat offers expert coaching, stunning waves, and a welcoming surf community in Morocco. Book your lesson today.',
    images: ['/favicon/android-chrome-512x512.png'], // match your OG image
  },
};


export default function HomePage() {
  return <ElearningLandingView />;
}
