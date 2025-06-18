'use client'

import { useState } from 'react'
import { Stethoscope, Heart, Brain, Calendar, Phone, MapPin, Clock, CheckCircle, ArrowRight, User, Shield, Award, Users } from 'lucide-react'
import ResourceMap from '@/components/ResourceMap'
import { cn } from '@/lib/utils'

const serviceTabs = [
  {
    id: 'medical',
    name: 'Medical',
    icon: Stethoscope,
    description: 'Primary healthcare services'
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: Heart,
    description: 'Oral health and dental care'
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    icon: Brain,
    description: 'Counseling and mental wellness'
  }
]

const serviceContent = {
  medical: {
    title: 'Primary Medical Care',
    description: 'Comprehensive healthcare services for individuals and families without insurance or with limited coverage.',
    services: [
      'Annual physical exams and wellness visits',
      'Chronic disease management (diabetes, hypertension, etc.)',
      'Acute illness treatment (cold, flu, infections)',
      'Preventive care and health screenings',
      'Basic laboratory tests and diagnostics',
      'Prescription medication assistance',
      'Health education and lifestyle counseling',
      'Referrals to specialists when needed'
    ],
    eligibility: [
      'Uninsured and underinsured individuals and families',
      'Household income at or below 200% of Federal Poverty Level',
      'Residents of Northwest Arkansas',
      'All ages welcome (pediatric to geriatric)'
    ],
    process: [
      'Call to schedule an appointment',
      'Bring photo ID and proof of income',
      'Complete intake forms and health history',
      'Meet with healthcare provider',
      'Receive treatment plan and follow-up care'
    ]
  },
  dental: {
    title: 'Dental Care Services',
    description: 'Essential dental care to maintain oral health and prevent dental disease.',
    services: [
      'Dental cleanings and oral hygiene education',
      'Comprehensive dental examinations',
      'Digital X-rays and diagnostic imaging',
      'Fillings and basic restorative care',
      'Tooth extractions when necessary',
      'Emergency dental care for pain relief',
      'Fluoride treatments and sealants',
      'Denture consultations and adjustments'
    ],
    eligibility: [
      'Uninsured and underinsured individuals and families',
      'Household income at or below 200% of Federal Poverty Level',
      'Residents of Northwest Arkansas',
      'Children and adults of all ages'
    ],
    process: [
      'Call to schedule a dental appointment',
      'Bring photo ID and proof of income',
      'Complete dental history and health forms',
      'Receive dental examination and cleaning',
      'Discuss treatment plan and follow-up care'
    ]
  },
  'mental-health': {
    title: 'Mental Health Services',
    description: 'Compassionate mental health support and counseling services.',
    services: [
      'Individual counseling and therapy',
      'Group therapy sessions',
      'Crisis intervention and support',
      'Depression and anxiety treatment',
      'Stress management and coping strategies',
      'Grief and loss counseling',
      'Family and relationship counseling',
      'Mental health education and resources'
    ],
    eligibility: [
      'Uninsured and underinsured individuals and families',
      'Household income at or below 200% of Federal Poverty Level',
      'Residents of Northwest Arkansas',
      'All ages (child, adolescent, and adult services)'
    ],
    process: [
      'Call to schedule a mental health appointment',
      'Complete mental health screening',
      'Meet with licensed counselor or therapist',
      'Develop personalized treatment plan',
      'Attend regular sessions as recommended'
    ]
  }
}

export default function GetCarePage() {
  const [activeTab, setActiveTab] = useState('medical')

  const currentService = serviceContent[activeTab as keyof typeof serviceContent]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-300 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
              <Stethoscope className="h-6 w-6" />
              <span className="font-semibold text-lg">Launching August 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Get the Care You Need
              <span className="block text-teal-200 mt-2">at 7Hills</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">
              Quality healthcare shouldn't be a privilege. We provide comprehensive medical, 
              dental, and mental health services to uninsured individuals and families through our 
              <span className="text-teal-200 font-semibold"> student-led, physician-mentored</span> approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+18703356746"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 text-white text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call (870) 335-6746
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Learn About Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Info */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="professional-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                828 S Seven Hills Ct<br />
                Fayetteville, AR 72701<br />
                <span className="text-sm text-gray-500">At 7Hills Homeless Center</span>
              </p>
            </div>
            <div className="professional-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="text-orange-600 font-semibold">Opening August 2025</span><br />
                Mon-Fri: 9:00 AM - 4:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </div>
            <div className="professional-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <a href="tel:+18703356746" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  (870) 335-6746
                </a><br />
                <a href="mailto:restoringhopeclinic@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  restoringhopeclinic@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 rounded-full px-6 py-3 mb-8">
              <Stethoscope className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-800 dark:text-green-200 font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our integrated approach provides medical, dental, and mental health services in one location, 
              making it easier for you to get the comprehensive care you need.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                )}
              >
                <tab.icon className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">{tab.name}</div>
                  <div className="text-sm opacity-75">{tab.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="max-w-6xl mx-auto">
            <div className="professional-card p-10 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentService.title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Services */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Services Offered</h4>
                  </div>
                  <ul className="space-y-3">
                    {currentService.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Eligibility</h4>
                  </div>
                  <ul className="space-y-3">
                    {currentService.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <User className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">How It Works</h4>
                  </div>
                  <ol className="space-y-4">
                    {currentService.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're launching in August 2025 with comprehensive healthcare services at 7Hills. 
            Contact us to learn more or get on our waiting list.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:+18703356746"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 text-white text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call (870) 335-6746
            </a>
            <a
              href="mailto:restoringhopeclinic@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <Users className="mr-3 h-6 w-6" />
              Email Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="text-white/80 space-y-2">
            <p className="text-lg font-semibold">828 S Seven Hills Ct, Fayetteville, AR 72701</p>
            <p>Located at 7Hills Homeless Center</p>
          </div>
        </div>
      </section>
    </div>
  )
} 