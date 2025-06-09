import Image from "next/image"

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">YOUR KID NEEDS TWO THINGS TO LEARN</h2>

            <h3 className="text-xl font-bold text-blue-700 mb-4">Academics at the right level and pace</h3>
            <p className="text-gray-700 mb-8">
              Our AI tutor gives students 1:1 personalized education, providing coursework at their individual pace and
              the appropriate level. Students progress with concept-based mastery and without any knowledge gaps.
            </p>

            <h3 className="text-xl font-bold text-blue-700 mb-4">Motivation with the right reward</h3>
            <p className="text-gray-700">
              We motivate kids by giving them the gift of time to pursue the things they want to do and develop life
              skills. Adults in the room support motivated students to foster a growth mindset and independent learning.
            </p>
          </div>

          <div className="relative">
            <div className="bg-blue-700 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Excited student learning"
                width={600}
                height={500}
                className="mix-blend-overlay opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white text-center">
                  How Alpha
                  <br />
                  School Works
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
