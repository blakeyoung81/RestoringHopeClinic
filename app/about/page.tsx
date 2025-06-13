import { 
  Heart, 
  Users, 
  Stethoscope, 
  GraduationCap, 
  Award, 
  MapPin, 
  Building2,
  TrendingUp,
  Shield,
  Lightbulb,
  Home as HomeIcon,
  Briefcase,
  Calendar
} from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-white font-semibold text-sm">Launching August 2025</span>
              </div>
            </div>
            <h1 className="heading-xl mb-6 fade-in">
              A Blueprint for Integrated
              <span className="block text-teal-200 mt-2">Sustainable Healthcare</span>
            </h1>
            <p className="body-lg text-white/90 mb-8 slide-up">
              Restoring Hope Clinic is a nonprofit healthcare initiative launching at 7Hills Homeless Center, 
              creating an innovative student-led, physician-mentored model that addresses healthcare and housing together.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 slide-up">
              <div className="text-center">
                <div className="stat-number text-white">2025</div>
                <div className="stat-label text-white/70">Founded</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-white">7Hills</div>
                <div className="stat-label text-white/70">Partner Location</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-white">3</div>
                <div className="stat-label text-white/70">Medical Schools</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-white">10</div>
                <div className="stat-label text-white/70">Acre Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="body-lg text-gray-600 dark:text-gray-300 mb-8">
                Restoring Hope Clinic is committed to providing comprehensive, high-quality, accessible medical, dental, 
                and mental health services to underserved and unhoused populations in Northwest Arkansas. Our student-led, 
                physician-mentored approach ensures long-term sustainability without dependence on volunteer funding.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Healthcare for uninsured, unhoused, and underserved populations within a short walk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Uniting universities, nonprofits, churches, and local health systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built for the long term, not reliant on unstable funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8">
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">828 S Seven Hills Ct, Fayetteville, AR 72701</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-blue-600 dark:text-blue-400">📧</span>
                  <span className="text-gray-700 dark:text-gray-300">RestoringHopeClinic@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-blue-600 dark:text-blue-400">📞</span>
                  <span className="text-gray-700 dark:text-gray-300">(870) 335-6746</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Free Care</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">Aug</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">2025 Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                The Problem: A Fragmented System
              </h2>
              <p className="body-md text-gray-600 dark:text-gray-300 mb-6">
                Despite numerous programs across Northwest Arkansas, the current system of care for the unhoused 
                is fragmented, inconsistent, and difficult to navigate. Many individuals experiencing homelessness 
                lack access to coordinated, consistent medical care.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Programs operate in silos, unaware of each other's efforts
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Patients fall through the cracks between services
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Emergency departments become default care providers
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Rising housing costs worsen the crisis
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                Our Solution: Integrated Care
              </h2>
              <p className="body-md text-gray-600 dark:text-gray-300 mb-6">
                Restoring Hope Clinic is co-located within 7Hills Homeless Center, delivering high-quality, 
                no-cost medical, dental, and mental health care. We leverage student doctors, residents, 
                and volunteer physicians from UAMS, Washington Regional, and Alice Walton School of Medicine.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Integrated community hub addressing health and housing
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Student-led, physician-mentored sustainable model
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Partnerships across education, architecture, and medicine
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Replicable and scalable model for other cities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Our Action Plan
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're implementing our vision through carefully planned phases, from immediate launch preparation 
              to long-term scalable impact.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Phase 0 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="professional-card p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="heading-sm text-gray-900 dark:text-white mb-2">Phase 0</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold">Now - August 2025</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Immediate Launch Preparation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Renovate clinic space at 7Hills</li>
                    <li>• Collaborate with Fay Jones School of Architecture</li>
                    <li>• Acquire basic equipment and supplies</li>
                    <li>• Establish EMR system (EPIC access)</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Recruit medical personnel from UAMS, WRMC, AWSOM</li>
                    <li>• Partner with local physicians and dentists</li>
                    <li>• Secure in-kind donations</li>
                    <li>• Build volunteer network</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase I */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="professional-card p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="heading-sm text-gray-900 dark:text-white mb-2">Phase I</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">6 months - 1 year</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Clinic Operations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Begin core medical and dental services</li>
                    <li>• Host skin cancer screening events</li>
                    <li>• Organize health education presentations</li>
                    <li>• Build referral networks with local clinicians</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Establish transportation system</li>
                    <li>• Partner with city for transportation routes</li>
                    <li>• Connect with specialists and hospitals</li>
                    <li>• Develop volunteer-based support model</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase II */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="professional-card p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="heading-sm text-gray-900 dark:text-white mb-2">Phase II</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">1-2 years</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Full Expansion</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Expand mental health care and therapy</li>
                    <li>• Develop transitional housing on 10-acre property</li>
                    <li>• Implement architecture plans with city</li>
                    <li>• Create unified health and housing campus</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Comprehensive medical and dental care</li>
                    <li>• Build central healthcare hub</li>
                    <li>• Establish healing environment</li>
                    <li>• Promote dignity and sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-lg text-white mb-6">
            How You Can Help: Investing in Hope
          </h2>
          <p className="body-lg text-white/90 mb-12 max-w-3xl mx-auto">
            Building a healthier, more equitable Fayetteville requires collective effort. 
            Join us in creating this revolutionary healthcare model.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Stethoscope className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Equipment & Supplies</h3>
              <p className="text-white/80 text-sm">
                Dental instruments, X-ray equipment, medical supplies, and cleaning items
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Volunteer Skills</h3>
              <p className="text-white/80 text-sm">
                Healthcare providers, builders, teachers, tech specialists, and students
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Building2 className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Technology Infrastructure</h3>
              <p className="text-white/80 text-sm">
                EPIC EMR system access and computers for patient charting
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <HomeIcon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Housing Support</h3>
              <p className="text-white/80 text-sm">
                Advocate for transitional housing and support local government initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Join Our Mission
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-300 mb-8">
            Together, we can build a healthcare system that serves everyone—not just those who can afford it. 
            By investing in Restoring Hope Clinic, you're investing in a compassionate and sustainable solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/volunteer" className="btn-primary">
              Volunteer With Us
            </a>
            <a href="/donate" className="btn-warm">
              Support Our Launch
            </a>
            <a href="mailto:RestoringHopeClinic@gmail.com" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 