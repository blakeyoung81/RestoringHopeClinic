'use client'

import { useState } from 'react'
import { Heart, Users, Clock, Award, Filter } from 'lucide-react'
import VolunteerForm from '@/components/VolunteerForm'
import { cn } from '@/lib/utils'

const volunteerRoles = [
  {
    id: 'medical',
    title: 'Medical Volunteers',
    description: 'Licensed healthcare professionals providing direct patient care',
    requirements: ['Current medical license', 'Malpractice insurance', 'Background check'],
    timeCommitment: '4+ hours per month',
    positions: ['Physicians', 'Nurse Practitioners', 'Registered Nurses', 'Medical Assistants']
  },
  {
    id: 'dental',
    title: 'Dental Volunteers',
    description: 'Dental professionals providing oral healthcare services',
    requirements: ['Current dental license', 'Malpractice insurance', 'Background check'],
    timeCommitment: '4+ hours per month',
    positions: ['Dentists', 'Dental Hygienists', 'Dental Assistants']
  },
  {
    id: 'administrative',
    title: 'Administrative Support',
    description: 'Help with patient check-in, scheduling, and office tasks',
    requirements: ['Background check', 'Basic computer skills'],
    timeCommitment: '3+ hours per month',
    positions: ['Reception', 'Data Entry', 'Filing', 'Phone Support']
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Volunteers',
    description: 'Licensed pharmacists helping with medication management',
    requirements: ['Current pharmacy license', 'Background check'],
    timeCommitment: '4+ hours per month',
    positions: ['Pharmacists', 'Pharmacy Technicians']
  },
  {
    id: 'translation',
    title: 'Translation Services',
    description: 'Help bridge language barriers for our diverse patient population',
    requirements: ['Fluency in English + another language', 'Background check'],
    timeCommitment: '2+ hours per month',
    positions: ['Spanish Interpreters', 'Other Language Interpreters']
  },
  {
    id: 'support',
    title: 'General Support',
    description: 'Various support roles to keep our clinic running smoothly',
    requirements: ['Background check', 'Reliable transportation'],
    timeCommitment: '2+ hours per month',
    positions: ['Maintenance', 'Cleaning', 'Event Planning', 'Community Outreach']
  }
]

const filterOptions = [
  { id: 'all', label: 'All Roles' },
  { id: 'medical', label: 'Medical' },
  { id: 'dental', label: 'Dental' },
  { id: 'administrative', label: 'Administrative' },
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'translation', label: 'Translation' },
  { id: 'support', label: 'Support' }
]

export default function VolunteerPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)

  const filteredRoles = activeFilter === 'all' 
    ? volunteerRoles 
    : volunteerRoles.filter(role => role.id === activeFilter)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Clean Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
                <Heart className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold text-sm">Join Our Mission</span>
              </div>
            </div>
            <h1 className="heading-xl mb-6">
              Volunteer With Us
            </h1>
            <p className="body-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Join our compassionate team of volunteers and help us provide quality healthcare 
              to those who need it most. Every hour you give makes a difference in our community.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              Apply Now
              <Heart className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Clean Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Volunteers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">15,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Hours Donated</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2,500+</div>
              <div className="text-gray-600 dark:text-gray-400">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Volunteer Roles Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Volunteer Opportunities
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the perfect way to contribute your skills and time to make a lasting impact 
              in our community's health and wellbeing.
            </p>
          </div>

          {/* Clean Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={cn(
                  'px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                  activeFilter === option.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Clean Volunteer Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="heading-sm text-gray-900 dark:text-white mb-4">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {role.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Time Commitment:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {role.timeCommitment}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Requirements:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {role.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Positions Available:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.positions.map((position, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Impact Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your time and skills can transform lives in our community. Join us in building 
            a healthier, more compassionate future for everyone.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
          >
            Get Started Today
            <Heart className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

             {/* Volunteer Form Modal */}
       {showForm && (
         <div className="fixed inset-0 z-50 overflow-y-auto">
           <div className="flex min-h-screen items-center justify-center p-4">
             <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)} />
             <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
               <div className="p-6">
                 <div className="flex justify-between items-center mb-6">
                   <h2 className="heading-md text-gray-900 dark:text-white">Volunteer Application</h2>
                   <button 
                     onClick={() => setShowForm(false)}
                     className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                 </div>
                 <VolunteerForm />
               </div>
             </div>
           </div>
         </div>
       )}
    </div>
  )
} 