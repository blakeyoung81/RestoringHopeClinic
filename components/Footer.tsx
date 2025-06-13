import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Get Care', href: '/get-care' },
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'About', href: '/about' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-brand-primary" aria-hidden="true" />
              <span className="text-xl font-bold">Restoring Hope Clinic</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing free medical and dental care to uninsured individuals and families 
              in Northwest Arkansas. Restoring hope, one patient at a time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>123 Hope Street, Bentonville, AR 72712</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a 
                  href="tel:+14795551234" 
                  className="hover:text-brand-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  (479) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a 
                  href="mailto:info@restoringhopeclinic.org" 
                  className="hover:text-brand-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  info@restoringhopeclinic.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours and Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Clinic Hours
            </h3>
            <div className="text-gray-300 space-y-1 mb-6">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-brand-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Restoring Hope Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-brand-primary text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-brand-primary text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 