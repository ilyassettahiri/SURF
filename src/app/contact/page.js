import ElearningContactView from 'src/sections/_elearning/view/elearning-contact-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contact Us | Surf in Rabat - Book Your Surf Lessons in Morocco',
  description:
    'Get in touch with Surf in Rabat to book your surf lessons, ask questions, or learn more about our coaching programs in Morocco. We’re here to help you ride the waves.',
  keywords: [
    'Surf in Rabat contact',
    'Book surf lessons Rabat',
    'Morocco surf school contact',
    'Chadi Lahrioui surf coach',
    'Surfing Rabat contact',
    'Private surf coach Morocco',
    'Contact surf Morocco',
  ],
  authors: [{ name: 'Surf in Rabat' }],
  creator: 'Surf in Rabat',
  publisher: 'Surf in Rabat',
  robots: 'index, follow',
  metadataBase: new URL('https://surfinrabat.com'), // replace with your domain
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Surf in Rabat - Book Your Surf Lessons in Morocco',
    description:
      'Contact Surf in Rabat to ask questions or schedule your surf coaching session with national champion Chadi Lahrioui.',
    url: 'https://surfinrabat.com/contact', // update path as needed
    siteName: 'Surf in Rabat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png', // replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Contact Surf in Rabat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Surf in Rabat - Book Your Surf Lessons in Morocco',
    description:
      'Reach out to Surf in Rabat to book lessons, ask about surf packages, or speak with our team in Morocco.',
    images: ['/favicon/android-chrome-512x512.png'], // replace if needed
  },
};


export default function ElearningContactPage() {
  return <ElearningContactView />;
}
