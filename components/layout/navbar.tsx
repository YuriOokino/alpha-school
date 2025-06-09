"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Box } from 'lucide-react'

interface DropdownItem {
  title: string
  href: string
  description?: string
}

interface MegaMenuColumn {
  heading: string
  items: { title: string; href: string; description: string }[]
}

interface NavItem {
  title: string
  href: string
  dropdown?: DropdownItem[]
  megaMenu?: MegaMenuColumn[]
  linksColumn?: { heading: string; links: { title: string; href: string }[] }
}

const navItems: NavItem[] = [
  {
    title: "The Program",
    href: "#",
    dropdown: [
      { title: "Overview", href: "#", description: "Learn about our innovative approach" },
      { title: "Academic Excellence", href: "#", description: "How we achieve more in less time" },
      { title: "Life Skills", href: "#", description: "Building essential skills for success" },
      { title: "Community", href: "#", description: "Creating a supportive environment" },
    ]
  },
  {
    title: "Admission",
    href: "#",
    dropdown: [
      { title: "How to Apply", href: "#", description: "Step-by-step application process" },
      { title: "Tuition & Aid", href: "#", description: "Financial information and support" },
      { title: "FAQs", href: "#", description: "Common questions about admission" },
    ]
  },
  {
    title: "Locations",
    href: "#",
    megaMenu: [
      {
        heading: "Texas",
        items: [
          { title: "Austin", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Brownsville", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Houston", href: "#", description: "Opening August 2025" },
          { title: "Fort Worth", href: "#", description: "Opening August 2025" },
        ]
      },
      {
        heading: "Florida",
        items: [
          { title: "Miami", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Orlando", href: "#", description: "Opening August 2025" },
          { title: "Tampa", href: "#", description: "Opening August 2025" },
          { title: "Palm Beach", href: "#", description: "Opening August 2025" },
        ]
      },
      {
        heading: "More locations",
        items: [
          { title: "Page Nine", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Page Ten", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Page Eleven", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
          { title: "Page Twelve", href: "#", description: "Lorem ipsum dolor sit amet consectetur elit" },
        ]
      }
    ],
    linksColumn: {
      heading: "Useful links",
      links: [
        { title: "Link one", href: "#" },
        { title: "Link two", href: "#" },
        { title: "Link three", href: "#" },
        { title: "Link four", href: "#" },
        { title: "Link five", href: "#" },
      ]
    }
  },
  {
    title: "Events",
    href: "#"
  },
  {
    title: "Resources",
    href: "#",
    dropdown: [
      { title: "Blog", href: "#", description: "Latest news and insights" },
      { title: "Newsletter", href: "#", description: "Stay updated with our newsletter" },
      { title: "Media Kit", href: "#", description: "Press and media resources" },
    ]
  },
  {
    title: "Insights",
    href: "#",
    dropdown: [
      { title: "Research", href: "#", description: "Our educational approach" },
      { title: "Success Stories", href: "#", description: "Student and parent testimonials" },
      { title: "In the News", href: "#", description: "Media coverage and press" },
    ]
  }
]

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMegaMenuHovered, setIsMegaMenuHovered] = useState(false)
  const locationsNavItem = navItems.find((item) => item.title === 'Locations');

  return (
    <header className="w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/assets/logo-white.svg"
              alt="Alpha School Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center h-full">
          <ul className="flex gap-8 items-center h-full">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!isMegaMenuHovered) setActiveDropdown(null)
                  }, 10)
                }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full ${activeDropdown === item.title ? 'text-blue-700' : 'text-gray-900'} hover:text-blue-700`}
                >
                  {item.title}
                  {(item.dropdown || item.megaMenu) && (
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-150 group-hover:rotate-90" />
                  )}
                </Link>
                {/* Regular Dropdowns */}
                {item.dropdown && !item.megaMenu && activeDropdown === item.title && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                      >
                        <div className="font-medium">{dropdownItem.title}</div>
                        {dropdownItem.description && (
                          <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Mega Menu for Locations - rendered outside <li> for proper alignment */}
        {locationsNavItem && activeDropdown === 'Locations' && (
          <div
            className={`absolute top-full left-0 right-0 mx-auto pt-4 w-[90vw] max-w-[1410px] min-w-[900px] bg-white text-black rounded-xl shadow-2xl py-8 px-8 flex border border-gray-100 z-50 transition-all duration-200 ease-in-out ${activeDropdown === 'Locations' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseEnter={() => setIsMegaMenuHovered(true)}
            onMouseLeave={() => {
              setIsMegaMenuHovered(false)
              setActiveDropdown(null)
            }}
            style={{ left: 0, right: 0 }}
          >
            {locationsNavItem.megaMenu && locationsNavItem.megaMenu.map((col) => (
              <div key={col.heading} className="flex-1 min-w-[180px] mr-8 last:mr-0">
                <div className="font-semibold mb-4 text-gray-900">{col.heading}</div>
                <ul className="space-y-4">
                  {col.items.map((loc) => (
                    <li key={loc.title}>
                      <Link href={loc.href} className="flex items-start space-x-3 group">
                        <Box className="h-6 w-6 mt-1 text-blue-700" />
                        <div>
                          <div className="font-bold group-hover:text-blue-700">{loc.title}</div>
                          <div className="text-sm text-gray-600">{loc.description}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Useful links column */}
            {locationsNavItem.linksColumn && (
              <div className="min-w-[160px] ml-8">
                <div className="font-semibold mb-4 text-gray-900">{locationsNavItem.linksColumn.heading}</div>
                <ul className="space-y-2">
                  {locationsNavItem.linksColumn.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="text-gray-800 hover:text-blue-700 text-sm font-medium">{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {/* CTA Button (optional, keep if you want) */}
        <div className="hidden md:block ml-8">
          <Button variant="secondary" className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-8 py-2 text-lg font-semibold">
            Learn more
          </Button>
        </div>
      </div>
    </header>
  )
} 