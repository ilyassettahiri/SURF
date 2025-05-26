import TravelAboutView from 'src/sections/_elearning/view/elearning-about-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'About Us | Surf in Rabat - Surf School & Coaching in Morocco',
  description:
    'Learn more about Surf in Rabat, Morocco’s trusted surf school and coaching center led by national champion Chadi Lahrioui. Discover our story, mission, and dedication to surf excellence.',
  keywords: [
    'About Surf in Rabat',
    'Surf school Rabat',
    'Chadi Lahrioui',
    'Surfing Morocco',
    'Rabat surf team',
    'Surf lessons',
    'About Moroccan surf coaches',
    'Surf in Rabat story',
    'Private surf training Morocco',
  ],
  authors: [{ name: 'Surf in Rabat' }],
  creator: 'Surf in Rabat',
  publisher: 'Surf in Rabat',
  robots: 'index, follow',
  metadataBase: new URL('https://surfinrabat.com'), // replace with your domain
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Surf in Rabat - Surf School & Coaching in Morocco',
    description:
      'Surf in Rabat is dedicated to helping all levels of surfers grow, led by national champion Chadi Lahrioui. Learn about our journey, vision, and passion for surfing.',
    url: 'https://surfinrabat.com/about', // update path as needed
    siteName: 'Surf in Rabat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png', // update to your actual image
        width: 1200,
        height: 630,
        alt: 'Surf in Rabat - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Surf in Rabat - Surf School & Coaching in Morocco',
    description:
      'Discover the story and mission of Surf in Rabat — the heart of Morocco’s surf culture, training surfers of all levels.',
    images: ['/favicon/android-chrome-512x512.png'], // update to match
  },
};


export default function TravelAboutPage() {
  return <TravelAboutView />;
}
