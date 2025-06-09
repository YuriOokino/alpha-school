"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const guides = [
  {
    name: "PAIGE FULTS",
    title: "Head of School | Brownsville",
    bio: "Paige Fults is a strategic innovator and educator with expertise in communications, enterprise innovation, and partnerships, driven by a passion for purpose-driven learning and child development.",
    imageSrc: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "JOHN SMITH",
    title: "Head of School | Austin",
    bio: "John Smith brings over 15 years of educational leadership experience with a focus on curriculum development and student-centered learning approaches.",
    imageSrc: "/placeholder.svg?height=200&width=200",
  },
]

export default function AlphaGuidesSection() {
  const [currentGuide, setCurrentGuide] = useState(0)

  const nextGuide = () => {
    setCurrentGuide((prev) => (prev + 1) % guides.length)
  }

  const prevGuide = () => {
    setCurrentGuide((prev) => (prev - 1 + guides.length) % guides.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">THE ALPHA GUIDES</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-8">
              At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to
              supporting students' emotional and motivational needs and teaching life skills. This impactful
              transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners.
            </p>

            <h3 className="text-blue-700 font-bold text-xl mb-2">Guidance:</h3>
            <p className="text-gray-700 mb-6">
              Adults, whether teachers or parents, become 'Guides,' shifting the traditional teacher-student
              relationship to offer motivational and emotional support.
            </p>

            <h3 className="text-blue-700 font-bold text-xl mb-2">Support:</h3>
            <p className="text-gray-700 mb-6">
              Assist students with AI-powered learning, help them develop life skills, and pursue their passions.
            </p>

            <h3 className="text-blue-700 font-bold text-xl mb-2">Motivation:</h3>
            <p className="text-gray-700 mb-6">
              We motivate kids by giving them the gift of time to pursue the things they want to do and develop life
              skills. Adults in the room support motivated students to foster a growth mindset and independent learning.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8 relative">
            <button
              onClick={prevGuide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous guide"
            >
              <ChevronLeft className="h-6 w-6 text-blue-700" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={guides[currentGuide].imageSrc || "/placeholder.svg"}
                  alt={guides[currentGuide].name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-1">{guides[currentGuide].name}</h3>
              <p className="text-gray-600 mb-4">{guides[currentGuide].title}</p>
              <p className="text-gray-700">{guides[currentGuide].bio}</p>
            </div>

            <button
              onClick={nextGuide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Next guide"
            >
              <ChevronRight className="h-6 w-6 text-blue-700" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button>
            EXPLORE OUR PROGRAM
          </Button>
        </div>
      </div>
    </section>
  )
}
