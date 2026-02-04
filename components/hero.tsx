import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Home, Users } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background"
    >
      <div className="absolute inset-0 bg-[url('/modern-girls-hostel-common-area-with-students-stud.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-3 sm:space-x-4 text-primary">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
              <Home className="h-6 w-6 sm:h-8 sm:w-8" />
              <Users className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            Welcome to <span className="text-primary">Audumbar</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-4xl text-muted-foreground">Coliving</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty px-2">
            A safe, comfortable, and modern home away from home for women in Ahilynagar. Experience the perfect blend
            of security, comfort, and community living.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button size="lg" className="group w-full sm:w-auto">
              Book Your Stay
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Take a Virtual Tour
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Security</div>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm sm:text-base text-muted-foreground">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
