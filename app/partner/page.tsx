'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Building2, Users, Stethoscope, Heart, CheckCircle, Loader2, AlertCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const partnershipSchema = z.object({
  organizationName: z.string().min(1, 'Organization name is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  title: z.string().min(1, 'Title is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  organizationType: z.string().min(1, 'Please select organization type'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  currentCapacity: z.string().min(1, 'Please describe your current capacity'),
  partnership_interest: z.string().min(1, 'Please select partnership interest'),
  description: z.string().min(20, 'Please provide a detailed description'),
  availability: z.string().min(1, 'Please describe your availability'),
})

type PartnershipFormData = z.infer<typeof partnershipSchema>

const organizationTypes = [
  'Medical Clinic',
  'Dental Practice',
  'Mental Health Practice',
  'Specialty Clinic',
  'Community Health Center',
  'Hospital',
  'Nonprofit Organization',
  'Educational Institution',
  'Other'
]

const serviceTypes = [
  'Primary Care',
  'Dental Care',
  'Mental Health Services',
  'Specialty Care',
  'Laboratory Services',
  'Radiology/Imaging',
  'Pharmacy Services',
  'Physical Therapy',
  'Nutrition Counseling',
  'Case Management',
  'Translation Services',
  'Transportation',
  'Other'
]

const partnershipInterests = [
  'Patient Referrals',
  'Accept Referrals from Us',
  'Joint Programs',
  'Resource Sharing',
  'Professional Development',
  'Community Outreach',
  'Emergency Backup',
  'All of the Above'
]

export default function PartnerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      services: [],
    },
  })

  const watchedServices = watch('services')

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your interest! We\'ll be in touch soon to discuss partnership opportunities.')
        reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
          <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
            Partnership Application Submitted!
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-6">
            {submitMessage}
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
                <Building2 className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold text-sm">Join Our Network</span>
              </div>
            </div>
            <h1 className="heading-xl mb-6">
              Partner With Us
            </h1>
            <p className="body-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Join our growing network of healthcare providers! We're building an interconnected system 
              where clinics, practices, and healthcare organizations work together to serve patients 
              across Northwest Arkansas. Together, we can ensure no one falls through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Why Partner With Restoring Hope Clinic?
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As a central healthcare hub, we connect patients with the right providers and 
              ensure comprehensive care coordination across our partner network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Patient Referrals</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Receive referrals for patients who need specialized care that we cannot provide on-site.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Coordinated Care</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Work together to ensure patients receive comprehensive, coordinated healthcare services.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Community Impact</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Together, we can serve more patients and create a stronger healthcare safety net.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Partnership Application
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300">
              Tell us about your organization and how we can work together to better serve our community.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  <p className="text-red-700 dark:text-red-300">{submitMessage}</p>
                </div>
              </div>
            )}

            {/* Organization Information */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Organization Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Organization Name *
                  </label>
                  <input
                    {...register('organizationName')}
                    type="text"
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.organizationName ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  />
                  {errors.organizationName && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.organizationName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Organization Type *
                  </label>
                  <select
                    {...register('organizationType')}
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.organizationType ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  >
                    <option value="">Select type...</option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.organizationType && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.organizationType.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Contact Person *
                  </label>
                  <input
                    {...register('contactPerson')}
                    type="text"
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.contactPerson ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.contactPerson.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title/Position *
                  </label>
                  <input
                    {...register('title')}
                    type="text"
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.title ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.email ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={cn(
                      'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                      errors.phone ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Services and Partnership Details */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Services and Partnership Details
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Services You Provide (select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {serviceTypes.map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        {...register('services')}
                        type="checkbox"
                        value={service}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.services.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="partnership_interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Partnership Interest *
                </label>
                <select
                  {...register('partnership_interest')}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                    errors.partnership_interest ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                  )}
                >
                  <option value="">Select your primary interest...</option>
                  {partnershipInterests.map((interest) => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
                {errors.partnership_interest && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.partnership_interest.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="currentCapacity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Current Capacity and Patient Volume *
                </label>
                <textarea
                  {...register('currentCapacity')}
                  rows={3}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white',
                    errors.currentCapacity ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                  )}
                  placeholder="Describe your current patient capacity, typical volume, and ability to accept new patients..."
                />
                {errors.currentCapacity && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.currentCapacity.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  How would you like to partner with us? *
                </label>
                <textarea
                  {...register('description')}
                  rows={4}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white',
                    errors.description ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                  )}
                  placeholder="Describe your vision for partnership, what you can offer, and what you hope to gain from working together..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Availability and Scheduling *
                </label>
                <textarea
                  {...register('availability')}
                  rows={3}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white',
                    errors.availability ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
                  )}
                  placeholder="Describe your hours of operation, scheduling process, and availability for partnership activities..."
                />
                {errors.availability && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.availability.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Partnership Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
} 