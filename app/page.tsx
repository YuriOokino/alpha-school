"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommitmentCard from "@/components/features/commitment-card"
import { useState } from "react"

// Import the new components at the top of the file
import TestimonialsSection from "@/components/sections/testimonials-section"
import AlphaGuidesSection from "@/components/sections/alpha-guides-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhatsNextSection from "@/components/sections/whats-next-section"
import CampusMapSection from "@/components/sections/CampusMapSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Blue Overlay */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            A school where kids crush academics in 2 hours, build life skills through workshops, and thrive beyond the
            classroom.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Campuses in Austin, Brownsville, and Miami—and seven new locations launching soon.
          </p>
          <Button variant="outline">Learn More</Button>
        </div>

        {/* Featured In Section */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <p className="text-center text-sm uppercase tracking-wider mb-8">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="/forbes-logo.png" alt="Forbes" width={120} height={40} className="h-8 w-auto" />
            <Image src="/today-logo.png" alt="Today" width={120} height={40} className="h-10 w-auto" />
            <Image
              src="/washington-times-logo.png"
              alt="The Washington Times"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <Image src="/dr-phil-logo.png" alt="Dr. Phil" width={100} height={40} className="h-8 w-auto" />
            <Image
              src="/business-insider-logo.png"
              alt="Business Insider"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-16">ALPHA'S 3 COMMITMENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CommitmentCard
            icon="academic"
            title="Academic Excellence"
            description="Condensed, focused learning that achieves more in 2 hours than traditional schools do all day."
          />
          <CommitmentCard
            icon="skills"
            title="Life Skills Development"
            description="Workshops that build critical thinking, creativity, and practical skills for real-world success."
          />
          <CommitmentCard
            icon="community"
            title="Community Growth"
            description="Creating an environment where students thrive socially and emotionally beyond traditional classrooms."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Alpha Guides Section */}
      <AlphaGuidesSection />

      <CampusMapSection />

      {/* What's Next Section */}
      <WhatsNextSection />
    </main>
  )
}
