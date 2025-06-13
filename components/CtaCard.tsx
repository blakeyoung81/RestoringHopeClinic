'use client'

import Link from 'next/link'
import { 
  Stethoscope, 
  Heart, 
  Users, 
  GraduationCap, 
  MapPin, 
  Building2,
  Home,
  Briefcase,
  Calendar,
  Award,
  TrendingUp,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  stethoscope: Stethoscope,
  heart: Heart,
  users: Users,
  graduationCap: GraduationCap,
  mapPin: MapPin,
  building2: Building2,
  home: Home,
  briefcase: Briefcase,
  calendar: Calendar,
  award: Award,
  trendingUp: TrendingUp,
  shield: Shield,
}

interface CtaCardProps {
  title: string
  description: string
  href: string
  icon: keyof typeof iconMap
  buttonText: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function CtaCard({
  title,
  description,
  href,
  icon,
  buttonText,
  variant = 'primary',
  className,
}: CtaCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <div className={cn(
      'relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow',
      className
    )}>
      <div>
        <span className={cn(
          'inline-flex items-center justify-center rounded-lg p-3',
          variant === 'primary' && 'bg-brand-primary text-white',
          variant === 'secondary' && 'bg-brand-light text-brand-dark',
          variant === 'outline' && 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
        )}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-6">
          <Link
            href={href}
            className={cn(
              'inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors',
              variant === 'primary' && 'bg-brand-primary text-white hover:bg-brand-dark focus-visible:outline-brand-primary',
              variant === 'secondary' && 'bg-brand-light text-brand-dark hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus-visible:outline-brand-primary',
              variant === 'outline' && 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:outline-gray-500'
            )}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
} 