'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Package, Heart, Stethoscope, Pill } from 'lucide-react'
import { cn } from '@/lib/utils'

const wishListCategories = [
  {
    id: 'medical-supplies',
    title: 'Medical Supplies',
    icon: Stethoscope,
    description: 'Essential medical equipment and supplies for patient care',
    items: [
      'Disposable gloves (all sizes)',
      'Face masks and N95 respirators',
      'Blood pressure cuffs',
      'Stethoscopes',
      'Thermometers (digital)',
      'Pulse oximeters',
      'Bandages and gauze',
      'Medical tape',
      'Alcohol prep pads',
      'Syringes and needles',
      'Examination table paper',
      'Hand sanitizer',
    ],
    priority: 'high'
  },
  {
    id: 'dental-supplies',
    title: 'Dental Supplies',
    icon: Heart,
    description: 'Dental care equipment and materials',
    items: [
      'Disposable dental bibs',
      'Dental floss',
      'Toothbrushes (adult and pediatric)',
      'Toothpaste (fluoride)',
      'Dental mirrors',
      'Dental picks',
      'Mouth rinse',
      'Dental impression materials',
      'Local anesthetic',
      'Dental x-ray film',
      'Dental gloves',
      'Face shields',
    ],
    priority: 'high'
  },
  {
    id: 'medications',
    title: 'Medications & Pharmacy',
    icon: Pill,
    description: 'Over-the-counter medications and pharmacy supplies',
    items: [
      'Acetaminophen/Tylenol',
      'Ibuprofen/Advil',
      'Aspirin',
      'Antihistamines',
      'Cough drops',
      'Antacids',
      'First aid ointments',
      'Vitamin supplements',
      'Prescription bottles',
      'Pill counting trays',
      'Medication labels',
      'Pharmacy bags',
    ],
    priority: 'medium'
  },
  {
    id: 'office-supplies',
    title: 'Office & Administrative',
    icon: Package,
    description: 'Office supplies and administrative materials',
    items: [
      'Copy paper',
      'Pens and pencils',
      'File folders',
      'Clipboards',
      'Printer ink cartridges',
      'Sticky notes',
      'Envelopes',
      'Stamps',
      'Binders',
      'Paper clips',
      'Staples',
      'Calendars',
    ],
    priority: 'low'
  },
  {
    id: 'facility-needs',
    title: 'Facility & Maintenance',
    icon: Package,
    description: 'Cleaning supplies and facility maintenance items',
    items: [
      'Disinfectant wipes',
      'All-purpose cleaner',
      'Paper towels',
      'Toilet paper',
      'Trash bags',
      'Laundry detergent',
      'Light bulbs',
      'Batteries (AA, AAA)',
      'Extension cords',
      'Basic tools',
      'Air fresheners',
      'Vacuum bags',
    ],
    priority: 'medium'
  }
]

export default function WishList() {
  const [openCategories, setOpenCategories] = useState<string[]>(['medical-supplies'])

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 dark:text-red-400'
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'low':
        return 'text-green-600 dark:text-green-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
      case 'low':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
      default:
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200'
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          In-Kind Donation Wish List
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Help us by donating these essential items. All donations are tax-deductible.
        </p>
      </div>

      {wishListCategories.map((category) => {
        const isOpen = openCategories.includes(category.id)
        const Icon = category.icon

        return (
          <div
            key={category.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-inset transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="h-6 w-6 text-brand-primary" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {category.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={cn(
                    'px-2 py-1 text-xs font-medium rounded-full',
                    getPriorityBadge(category.priority)
                  )}>
                    {category.priority} priority
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {isOpen && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>How to donate:</strong> Please contact us at{' '}
                    <a 
                      href="mailto:donations@restoringhopeclinic.org"
                      className="text-brand-primary hover:underline"
                    >
                      donations@restoringhopeclinic.org
                    </a>{' '}
                    or call{' '}
                    <a 
                      href="tel:+14795551234"
                      className="text-brand-primary hover:underline"
                    >
                      (479) 555-1234
                    </a>{' '}
                    to arrange drop-off or pickup.
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      })}

      <div className="bg-brand-light dark:bg-gray-800 rounded-lg p-6 mt-8">
        <div className="text-center">
          <Heart className="h-12 w-12 text-brand-primary mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Thank You for Your Generosity!
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your in-kind donations help us reduce operating costs and provide more resources 
            directly to patient care. Every item makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:donations@restoringhopeclinic.org"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
            >
              Contact Donations Team
            </a>
            <a
              href="tel:+14795551234"
              className="inline-flex items-center px-4 py-2 border border-brand-primary text-sm font-medium rounded-md text-brand-primary bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 