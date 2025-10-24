import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const facilities = [
  {
    title: "Comfortable Rooms",
    description: "Spacious rooms with modern amenities, comfortable beds, study tables, and ample storage space.",
    image: "/placeholder-k5yq8.png",
    features: ["AC/Non-AC Options", "Study Table", "Wardrobe", "Attached Bathroom"],
  },
  {
    title: "Common Areas",
    description: "Well-designed common areas for relaxation, socializing, and recreational activities.",
    image: "/placeholder-c853a.png",
    features: ["TV Lounge", "Reading Area", "Games Room", "Terrace Garden"],
  },
  {
    title: "Dining Hall",
    description: "Spacious dining hall serving nutritious vegetarian meals in a hygienic environment.",
    image: "/placeholder-hbtge.png",
    features: ["Hygienic Kitchen", "Nutritious Meals", "Special Diets", "Snack Counter"],
  },
  {
    title: "Study Facilities",
    description: "Dedicated study areas and library facilities to support your academic goals.",
    image: "/placeholder-9h03o.png",
    features: ["Library", "Group Study Rooms", "Silent Zones", "Computer Access"],
  },
  {
    title: "Recreation Zone",
    description: "Indoor and outdoor recreational facilities for physical fitness and entertainment.",
    image: "/placeholder-x4k4n.png",
    features: ["Indoor Games", "Fitness Area", "Outdoor Space", "Event Hall"],
  },
  {
    title: "Safety & Security",
    description: "Comprehensive security measures including CCTV surveillance and secure access.",
    image: "/placeholder-0r97b.png",
    features: ["CCTV Monitoring", "Secure Entry", "Night Security", "Emergency Systems"],
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">World-Class Facilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience modern amenities and comfortable living spaces designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{facility.description}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
