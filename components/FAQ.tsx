'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "When will Restoring Hope Clinic officially open?",
    answer: "We're launching in August 2025 at 7Hills Homeless Center in Fayetteville, Arkansas. We're currently in Phase 0, working on renovations, equipment acquisition, and staff recruitment."
  },
  {
    question: "What services will be available at launch?",
    answer: "At launch, we'll provide comprehensive medical care, dental services, and mental health support. This includes primary care, preventive services, basic dental procedures, counseling, and medication management—all integrated with housing support services."
  },
  {
    question: "Who is eligible for care at Restoring Hope Clinic?",
    answer: "Our services are designed for uninsured individuals and families, particularly those experiencing or at risk of homelessness. We welcome patients of all ages and prioritize those with household incomes at or below 200% of the Federal Poverty Level."
  },
  {
    question: "How much do services cost?",
    answer: "All healthcare services at Restoring Hope Clinic are provided at no cost to patients. We believe healthcare is a right, not a privilege, and our model ensures 100% free care for everyone who walks through our doors."
  },
  {
    question: "What makes this clinic different from other healthcare facilities?",
    answer: "We're pioneering an integrated model that addresses healthcare and housing together. Our student-led, physician-mentored approach provides high-quality care while training the next generation of healthcare providers. Being co-located at 7Hills allows us to address social determinants of health comprehensively."
  },
  {
    question: "What medical schools are involved in this project?",
    answer: "We're partnering with three medical institutions: UAMS (University of Arkansas for Medical Sciences), Washington Regional Medical Center, and the Alice Walton School of Medicine. Students from these programs will provide care under experienced physician supervision."
  },
  {
    question: "How can I get care before the August 2025 launch?",
    answer: "While our clinic opens in August 2025, you can contact us now at (870) 335-6746 or RestoringHopeClinic@gmail.com to get on our waiting list and receive information about interim healthcare resources in Northwest Arkansas."
  },
  {
    question: "Can I volunteer or support the clinic's development?",
    answer: "Absolutely! We need volunteers with medical backgrounds, technology skills, construction expertise, and general support. We also welcome equipment donations, financial support, and partnership opportunities. Visit our volunteer and donate pages to learn more."
  },
  {
    question: "Where exactly is the clinic located?",
    answer: "We're located at 828 S Seven Hills Ct, Fayetteville, AR 72701, within the 7Hills Homeless Center campus. This 10-acre integrated facility allows us to provide coordinated healthcare and housing services."
  },
  {
    question: "What are your long-term goals beyond the initial launch?",
    answer: "Phase II (1-2 years) includes expanding mental health services, developing transitional housing, and creating a fully integrated campus. Our ultimate goal is to create a replicable model that can be implemented in other communities facing similar challenges."
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