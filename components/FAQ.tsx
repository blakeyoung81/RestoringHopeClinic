'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "How does Restoring Hope serve as a healthcare partnership hub?",
    answer: "We coordinate care between dozens of healthcare providers across Northwest Arkansas. Our hub model connects patients with the right specialists, manages referrals, and ensures comprehensive care pathways from primary care through specialty services."
  },
  {
    question: "How can my clinic become a partner?",
    answer: "Healthcare providers, clinics, and specialists can join our partnership network by visiting our Partner page and completing the partnership application. We work with all types of healthcare providers to create seamless referral pathways."
  },
  {
    question: "Who is eligible for services?",
    answer: "We primarily serve uninsured and underinsured individuals in Northwest Arkansas. Our partnership hub ensures that patients receive appropriate care regardless of their ability to pay, connecting them with the right providers in our network."
  },
  {
    question: "What services are available?",
    answer: "Through our partnership network, we coordinate comprehensive medical, dental, and mental health services. While we provide direct care at 7Hills, we also connect patients with specialists and services throughout our partner network."
  },
  {
    question: "When does the clinic launch?",
    answer: "We are launching in August 2025 at 7Hills Homeless Center in Fayetteville, Arkansas. We're actively building our partnership network now to ensure comprehensive care coordination from day one."
  },
  {
    question: "How can I volunteer or get involved?",
    answer: "We offer volunteer opportunities for medical students, healthcare professionals, and community members. Visit our Volunteer page to learn about current opportunities and apply to join our team."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-800 dark:via-blue-950/30 dark:to-gray-900">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-8">
            Everything You Need to Know
          </h2>
          <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services, launch timeline, and how to get involved 
            with Restoring Hope Clinic.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="professional-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:scale-110 transition-all" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="professional-card p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/50 dark:to-teal-950/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to help! Contact us directly and we'll be happy to provide more information 
              about our services, volunteer opportunities, or partnership possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18703356746"
                className="btn-primary"
              >
                Call (870) 335-6746
              </a>
              <a
                href="mailto:RestoringHopeClinic@gmail.com"
                className="btn-secondary"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 