import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  grade: string
  age: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, grade, age, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 min-h-[340px] flex flex-col justify-between">
      <div className="text-blue-700 text-4xl font-serif mb-4">"</div>
      <p className="text-gray-800 mb-6 text-lg">{quote}</p>
      <div className="flex items-center mt-auto">
        <div className="mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full" />
        </div>
        <div>
          <h4 className="text-blue-700 font-bold text-lg">{name}</h4>
          <p className="text-gray-600">
            {grade} | {age}
          </p>
        </div>
      </div>
    </div>
  )
}
