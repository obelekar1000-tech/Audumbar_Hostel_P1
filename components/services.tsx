import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Utensils, Shield, Car, Shirt, BookOpen, Clock, Users } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV monitoring and secure entry systems for complete safety.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the hostel for studies and entertainment.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Healthy, home-cooked vegetarian meals prepared with fresh ingredients and love.",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description: "Professional laundry and dry cleaning services to keep your clothes fresh and clean.",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Safe and reliable transportation services to colleges and nearby areas.",
  },
  {
    icon: BookOpen,
    title: "Study Areas",
    description: "Quiet, well-lit study rooms and library facilities for focused learning.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Reasonable and flexible timing policies that accommodate student schedules.",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Foster friendships and create lasting memories in our supportive community environment.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">
            Our Premium Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            We provide comprehensive services to ensure your comfort, safety, and academic success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-3 sm:pb-6">
                <div className="mx-auto mb-3 sm:mb-4 p-2.5 sm:p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-pretty text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
