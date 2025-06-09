import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/assets/logo-white.svg" 
                alt="Alpha School Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="mb-4">admissions@alpha.school</p>
          </div>

          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-blue-600">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Love School
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Learn 2x in 2hrs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Learn Life Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-blue-600">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Alpha in Action
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Alpha Micro Schools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-blue-600">Insights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  In the News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Schools */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-blue-600">Other Schools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Future of Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  GT School
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Texas Sports Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  NextGen Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200">
                  Valenta Academy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-600">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="#" className="text-sm hover:text-blue-200">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm">Copyright 2025 © All Right Reserved Alpha School</div>
        </div>
      </div>
    </footer>
  )
}
