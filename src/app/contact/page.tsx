import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | ColorKnit Events Pune – Plan Your Corporate Event',
  description:
    'Get in touch with ColorKnit Events Pune. Book a consultation or request a custom quote for corporate events, annual days, MICE, exhibitions and conferences across Pune & Pan India.',
  keywords: [
    'contact ColorKnit events',
    'event management company Pune contact',
    'corporate event planners Pune phone',
    'event planners Pune address',
    'book corporate event Pune',
    'event management inquiry Pune',
  ],
  alternates: {
    canonical: 'https://www.colorknit.in/contact',
  },
  openGraph: {
    title: 'Contact Us | ColorKnit Events Pune',
    description:
      'Connect with ColorKnit Events Pune for corporate event planning, annual days, conferences, exhibitions & pan-India event production.',
    url: 'https://www.colorknit.in/contact',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ColorKnit Events Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | ColorKnit Events Pune',
    description:
      'Connect with ColorKnit Events Pune for corporate event planning, annual days, conferences, exhibitions & pan-India event production.',
    images: ['/images/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
