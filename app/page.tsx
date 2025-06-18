import Hero from '@/components/Hero'
import CtaCard from '@/components/CtaCard'
import FAQ from '@/components/FAQ'
import { 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Stethoscope, 
  GraduationCap,
  Shield,
  Award,
  TrendingUp,
  Building2,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Mission Statement - Clean */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              A Blueprint for Integrated, Sustainable Healthcare
            </h2>
            <p className="body-lg text-gray-600 dark:text-gray-300 mb-12">
              Restoring Hope Clinic is a nonprofit healthcare initiative launching August 2025 at 7Hills Homeless Center. 
              Our student-led, physician-mentored approach provides comprehensive medical, dental, and mental health services 
              while addressing the broader social determinants of health, including housing insecurity.
            </p>
            
            {/* Clean values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Healthcare within walking distance for everyone who needs it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Uniting universities, nonprofits, and health systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Built for long-term impact, not reliant on unstable funding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Creating new models of integrated care delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Timeline - Clean */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Our Launch Timeline
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building this revolutionary healthcare model in carefully planned phases, starting with our August 2025 launch 
              at 7Hills Homeless Center in Fayetteville.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-4 text-center">Phase 0: Launch Prep</h3>
              <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4 text-center">Now - August 2025</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Renovate clinic space at 7Hills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Acquire equipment and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Establish EMR system (EPIC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Recruit medical personnel</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-4 text-center">Phase I: Operations</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-center">6 months - 1 year</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Begin core medical services</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Health screenings & education</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Build interconnected referral networks connecting local clinics and specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Establish clinic partnership hub as central coordination point</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-4 text-center">Phase II: Expansion</h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4 text-center">1-2 years</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Full mental health services</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Transitional housing development</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Integrated campus design</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive care model</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Clean */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Comprehensive Services at 7Hills
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our integrated approach addresses healthcare and housing together, providing a full spectrum 
              of services to break the cycle of homelessness and support sustainable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CtaCard
              icon="stethoscope"
              title="Medical Care"
              description="General health screenings, chronic disease management, preventive care, and skin cancer screenings with student doctors and physician mentors."
              href="/get-care"
              buttonText="Learn About Medical Services"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
            
            <CtaCard
              icon="heart"
              title="Mental Health & Dental"
              description="Comprehensive mental health services, therapy, medication management, and full dental care including cleanings and treatments."
              href="/get-care"
              buttonText="Explore Health Services"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
            
            <CtaCard
              icon="home"
              title="Transitional Housing"
              description="Supportive housing services through our partnership with 7Hills, helping patients transition from homelessness to stable housing."
              href="/get-care"
              buttonText="Housing Support Info"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
            
            <CtaCard
              icon="graduationCap"
              title="Student Training"
              description="Medical students from UAMS, WRMC, and Alice Walton School gain hands-on experience while providing supervised care."
              href="/volunteer"
              buttonText="Join as Student"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
            
            <CtaCard
              icon="briefcase"
              title="Job Training & Support"
              description="Employment assistance, job training programs, and connections with local employers to support workforce reintegration."
              href="/get-care"
              buttonText="Employment Services"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
            
            <CtaCard
              icon="building2"
              title="Clinic Partnership Network"
              description="Join our growing network of healthcare providers! We serve as a central hub connecting patients with local clinics, specialists, and healthcare services across Northwest Arkansas."
              href="/donate"
              buttonText="Partner With Us"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Impact & Vision - Clean */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                Breaking Cycles, Building Futures
              </h2>
              <p className="body-md text-gray-600 dark:text-gray-300 mb-8">
                We're not just treating symptoms—we're addressing root causes. By integrating healthcare with housing, 
                job training, and community support, we're creating pathways to lasting stability and hope.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Holistic Approach</h3>
                    <p className="text-gray-600 dark:text-gray-400">Addressing medical, mental health, housing, and employment needs together</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Educational Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-400">Training compassionate healthcare leaders while serving the community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalable Model</h3>
                    <p className="text-gray-600 dark:text-gray-400">Creating a replicable blueprint for other communities facing similar challenges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Free Care</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Medical Schools</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Acre Campus</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Aug</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">2025 Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Clean Call to Action */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-lg mb-6">
            Help Us Launch in August 2025
          </h2>
          <p className="body-lg text-white/90 mb-8">
            We're building a revolutionary healthcare model that addresses both health and housing. 
            Join us as a volunteer, partner, or supporter to make this vision a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/volunteer" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Volunteer Your Skills
              <Users className="ml-2 w-4 h-4" />
            </a>
            <a href="/donate" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Support Our Launch
              <Heart className="ml-2 w-4 h-4" />
            </a>
            <a href="/about" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Learn Our Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(870) 335-6746</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>RestoringHopeClinic@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>828 S Seven Hills Ct, Fayetteville, AR</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 