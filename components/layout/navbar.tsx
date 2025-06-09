import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <>
      {/* Banner */}
      <div className="bg-blue-900 text-white py-2 text-center text-sm">
        <p>Join us for our next open house on March 15th! <Link href="#" className="underline hover:text-blue-200">Register now</Link></p>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo-white.svg"
                alt="Alpha School Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="hover:text-blue-200 flex items-center">
                The Program <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href="#" className="hover:text-blue-200 flex items-center">
                Admission <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href="#" className="hover:text-blue-200 flex items-center">
                Locations <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href="#" className="hover:text-blue-200 flex items-center">
                Events <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href="#" className="hover:text-blue-200 flex items-center">
                Resources <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href="#" className="hover:text-blue-200 flex items-center">
                Insights <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                Learn More
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md hover:bg-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
} 