import { BookOpen, Lightbulb, Users } from "lucide-react"

interface CommitmentCardProps {
  icon: "academic" | "skills" | "community"
  title: string
  description: string
}

export default function CommitmentCard({ icon, title, description }: CommitmentCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "academic":
        return <BookOpen className="h-10 w-10 text-white" />
      case "skills":
        return <Lightbulb className="h-10 w-10 text-white" />
      case "community":
        return <Users className="h-10 w-10 text-white" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-700 p-4 rounded-full mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
