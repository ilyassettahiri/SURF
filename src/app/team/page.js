import TravelTeamView from 'src/sections/_elearning/view/elearning-team-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Meet Our Team | Surf in Rabat - Professional Surf Coaches in Morocco',
  description:
    'Get to know the Surf in Rabat team — experienced and passionate surf coaches led by national champion Chadi Lahrioui. Meet the people who make your surf journey unforgettable.',
  keywords: [
    'Surf in Rabat team',
    'Meet our surf coaches',
    'Chadi Lahrioui surf trainer',
    'Surf instructors Rabat',
    'Moroccan surf coaches',
    'Surf school team Morocco',
    'Professional surf trainers Rabat',
    'Surf camp instructors Morocco',
  ],
  authors: [{ name: 'Surf in Rabat' }],
  creator: 'Surf in Rabat',
  publisher: 'Surf in Rabat',
  robots: 'index, follow',
  metadataBase: new URL('https://surfinrabat.com'), // replace with your domain
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Meet Our Team | Surf in Rabat - Professional Surf Coaches in Morocco',
    description:
      'Our team of certified surf instructors and coaches is dedicated to helping surfers of all levels grow their skills and confidence in the water.',
    url: 'https://surfinrabat.com/team',
    siteName: 'Surf in Rabat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png', // replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Surf in Rabat Surf Coaches',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | Surf in Rabat - Professional Surf Coaches in Morocco',
    description:
      'Led by national champion Chadi Lahrioui, our experienced surf coaches provide the highest quality instruction in Rabat.',
    images: ['/favicon/android-chrome-512x512.png'], // replace with actual image
  },
};


export default function TravelTeamPage() {
  return <TravelTeamView />;
}
