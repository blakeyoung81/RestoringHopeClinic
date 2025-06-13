'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const volunteerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  roles: z.array(z.string()).min(1, 'Please select at least one role'),
  availability: z.array(z.string()).min(1, 'Please select your availability'),
  experience: z.string().optional(),
  motivation: z.string().min(10, 'Please tell us why you want to volunteer'),
  backgroundCheck: z.boolean().refine(val => val === true, 'Background check consent is required'),
  references: z.string().optional(),
})

type VolunteerFormData = z.infer<typeof volunteerSchema>

const volunteerRoles = [
  'Medical Assistant',
  'Dental Assistant',
  'Reception/Check-in',
  'Pharmacy Assistant',
  'Translator',
  'Administrative Support',
  'Maintenance/Facilities',
  'Community Outreach',
  'Event Planning',
  'Grant Writing',
  'Social Media/Marketing',
  'Other'
]

const availabilityOptions = [
  'Monday Morning',
  'Monday Afternoon',
  'Tuesday Morning',
  'Tuesday Afternoon',
  'Wednesday Morning',
  'Wednesday Afternoon',
  'Thursday Morning',
  'Thursday Afternoon',
  'Friday Morning',
  'Friday Afternoon',
  'Saturday Morning',
  'Saturday Afternoon',
  'Weekends Only',
  'Evenings',
  'As Needed'
]

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      roles: [],
      availability: [],
      backgroundCheck: false,
    },
  })

  const watchedRoles = watch('roles')
  const watchedAvailability = watch('availability')

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your application! We\'ll be in touch soon.')
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
      <div className="max-w-2xl mx-auto p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
          <div>
            <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
              Application Submitted!
            </h3>
            <p className="text-green-700 dark:text-green-300 mt-1">
              {submitMessage}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
            <p className="text-red-700 dark:text-red-300">{submitMessage}</p>
          </div>
        </div>
      )}

      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Personal Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name *
            </label>
            <input
              {...register('firstName')}
              type="text"
              className={cn(
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.firstName ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type="text"
              className={cn(
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.lastName ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName.message}</p>
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
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
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
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.phone ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Address *
          </label>
          <input
            {...register('address')}
            type="text"
            className={cn(
              'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
              errors.address ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
            )}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City *
            </label>
            <input
              {...register('city')}
              type="text"
              className={cn(
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.city ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              State *
            </label>
            <input
              {...register('state')}
              type="text"
              className={cn(
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.state ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.state.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ZIP Code *
            </label>
            <input
              {...register('zipCode')}
              type="text"
              className={cn(
                'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                errors.zipCode ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.zipCode.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Volunteer Preferences */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Volunteer Preferences
        </h3>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Volunteer Roles (select all that interest you) *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {volunteerRoles.map((role) => (
              <label key={role} className="flex items-center">
                <input
                  {...register('roles')}
                  type="checkbox"
                  value={role}
                  className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 dark:border-gray-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{role}</span>
              </label>
            ))}
          </div>
          {errors.roles && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.roles.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Availability (select all that apply) *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {availabilityOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  {...register('availability')}
                  type="checkbox"
                  value={option}
                  className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 dark:border-gray-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
          {errors.availability && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.availability.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Relevant Experience (optional)
          </label>
          <textarea
            {...register('experience')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-white"
            placeholder="Tell us about any relevant experience you have..."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Why do you want to volunteer with us? *
          </label>
          <textarea
            {...register('motivation')}
            rows={4}
            className={cn(
              'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-white',
              errors.motivation ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
            )}
            placeholder="Share your motivation for volunteering..."
          />
          {errors.motivation && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.motivation.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="references" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            References (optional)
          </label>
          <textarea
            {...register('references')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-white"
            placeholder="Please provide contact information for 2-3 references..."
          />
        </div>

        <div className="mb-6">
          <label className="flex items-start">
            <input
              {...register('backgroundCheck')}
              type="checkbox"
              className={cn(
                'h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 dark:border-gray-600 rounded mt-1',
                errors.backgroundCheck ? 'border-red-300 dark:border-red-600' : ''
              )}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              I consent to a background check as required for volunteer positions. *
            </span>
          </label>
          {errors.backgroundCheck && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.backgroundCheck.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  )
} 