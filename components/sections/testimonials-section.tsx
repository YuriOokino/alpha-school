"use client"

import { useState } from "react"
import TestimonialCard from "./testimonial-card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "There's no hand holding, and I get to learn at my own pace.",
    name: "Silas",
    grade: "L2",
    age: "X Years Old",
    imageSrc: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "At Alpha, I don't have to stick just to second grade. I can learn third and fourth grade content, too.",
    name: "Marshall",
    grade: "X",
    age: "7 Years Old",
    imageSrc: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "One of the reasons I love Alpha is because we have our own currency that motivates us to do more work.",
    name: "Lulu",
    grade: "L2",
    age: "X Years Old",
    imageSrc: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "Alpha School has changed the way I think about learning!",
    name: "Jordan",
    grade: "L3",
    age: "8 Years Old",
    imageSrc: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "I love the friends I've made and the projects we get to do.",
    name: "Taylor",
    grade: "L1",
    age: "6 Years Old",
    imageSrc: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleCards = 3.5
  const cardWidth = 100 / visibleCards

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">FROM OUR STUDENTS</h2>

        <div className="relative flex items-center">
          <Button variant="ghost" onClick={prevTestimonial} aria-label="Previous testimonial" className="z-10">&#8592;</Button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${(testimonials.length) * cardWidth}%`,
                transform: `translateX(-${activeIndex * cardWidth}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  style={{ width: `${cardWidth}%`, minWidth: `${cardWidth}%` }}
                  className="px-2"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <Button variant="ghost" onClick={nextTestimonial} aria-label="Next testimonial" className="z-10">&#8594;</Button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === activeIndex ? "bg-blue-700" : "bg-gray-300"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
