import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Facilities } from "@/components/facilities"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Facilities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
