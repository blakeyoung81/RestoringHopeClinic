import { Button } from "@/components/ui/button"
import { Heart, Users, Stethoscope, GraduationCap, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white overflow-hidden">
      {/* Clean, subtle background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Clean launch badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm">Launching August 2025</span>
            </div>
          </div>

          {/* Professional headline */}
          <h1 className="heading-xl mb-6 fade-in">
            Restoring Hope & Health
            <span className="block text-teal-200 mt-2">One Life at a Time</span>
          </h1>
          
          <p className="body-lg text-white/90 mb-8 slide-up max-w-3xl mx-auto">
            A revolutionary student-led, physician-mentored healthcare initiative launching at 7Hills Homeless Center. 
            We're creating an <span className="text-teal-200 font-semibold">integrated model</span> that addresses healthcare and housing together, 
            breaking the cycle of homelessness through comprehensive medical, dental, and mental health services.
          </p>

          {/* Clean trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 slide-up">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Stethoscope className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Student-Led Care</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <GraduationCap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Physician-Mentored</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Integrated Housing</span>
            </div>
          </div>

          {/* Clean call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up">
            <Link href="/get-care">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Learn About Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Join Our Mission
                <Users className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Clean statistics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 slide-up">
            <div className="text-center">
              <div className="stat-number text-white">Aug</div>
              <div className="stat-label text-white/70">2025 Launch</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-white">3</div>
              <div className="stat-label text-white/70">Medical Schools</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-white">100%</div>
              <div className="stat-label text-white/70">Free Care</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-white">10</div>
              <div className="stat-label text-white/70">Acre Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 