"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    // name: "Priya Sharma",
    // role: "Engineering Student",
    content:
      // "Audumbar Hostel has been my home away from home for 2 years. The staff is caring, food is delicious, and I feel completely safe here. My parents are so relieved knowing I'm in such good hands.",
      "Audumbar Hostel has been my home away from home. The staff is caring, food is delicious, and I feel completely safe here. My parents are so relieved knowing I'm in such good hands.",
    rating: 5,
    image: "/placeholder-ikdy1.png",
  },
  {
    // name: "Mrs. Rajesh Patel",
    // role: "Parent",
    content:
      "As a parent, safety is my biggest concern. Audumbar Hostel exceeded all our expectations. The 24/7 security, regular updates, and caring environment give us complete peace of mind.",
    rating: 5,
    image: "/middle-aged-indian-woman-smiling.jpg",
  },
  {
    // name: "Ananya Desai",
    // role: "Medical Student",
    content:
      "The study environment here is exceptional. Quiet study rooms, good WiFi, and supportive friends have helped me excel in my studies. The nutritious food keeps me energized throughout the day.",
    rating: 5,
    image: "/placeholder-92cuq.png",
  },
  {
    // name: "Sneha Kulkarni",
    // role: "Commerce Graduate",
    content:
      // "I lived at Audumbar for 3 years and made lifelong friendships. The hostel feels like a big family where everyone supports each other. The facilities are modern and well-maintained.",
      "I lived at Audumbar made lifelong friendships. The hostel feels like a big family where everyone supports each other. The facilities are modern and well-maintained.",
    rating: 5,
    image: "/placeholder-sjp8x.png",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Residents Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our current residents and their families about their experience at Audumbar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground mb-6 text-pretty">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                      <div className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <img
                    src="/placeholder-csg1t.png"
                    alt="Happy students"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
