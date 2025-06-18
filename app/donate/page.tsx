import { Heart, DollarSign, Gift, Users, TrendingUp, Shield } from 'lucide-react'
import DonationWidget from '@/components/DonationWidget'
import WishList from '@/components/WishList'

export default function DonatePage() {
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
                <span className="text-white font-semibold text-sm">Make a Difference</span>
              </div>
            </div>
            <h1 className="heading-xl mb-6">
              Support Our Mission
            </h1>
            <p className="body-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Your generous donations help us provide free healthcare to those who need it most. 
              Every dollar makes a difference in someone's life and helps build our August 2025 launch.
            </p>
          </div>
        </div>
      </section>

      {/* Clean Impact Stats */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              Your Impact in Numbers
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how your donations directly impact our community and support our launch preparations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Transparent fund usage</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Free</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">All care provided at no cost</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Aug</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">2025 Launch Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Donation Form Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Donation Widget */}
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                Make a Donation
              </h2>
              <p className="body-md text-gray-600 dark:text-gray-300 mb-8">
                Your secure donation helps us launch in August 2025 and continue providing quality healthcare. 
                We accept all major credit cards, PayPal, and Apple Pay.
              </p>
              
              <DonationWidget />
              
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Secure SSL encryption</span>
                <span>•</span>
                <span>Tax-deductible</span>
                <span>•</span>
                <span>501(c)(3) nonprofit</span>
              </div>
            </div>

            {/* Clean Why Donate */}
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-8">
                Why Your Donation Matters
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Direct Patient Care
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Every dollar helps provide essential healthcare services and medical supplies to those in need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Community Impact
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Supporting uninsured and underinsured individuals and families in Northwest Arkansas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Launch Support
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Help us reach our August 2025 launch goal with equipment, supplies, and initial operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Complete Transparency
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We provide quarterly spending reports showing exactly how donations are used to support our mission.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Monthly Giving Program
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join our monthly giving program for sustained impact. Monthly donors receive:
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Quarterly impact reports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Invitation to exclusive donor events
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Recognition in our annual report
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Tax-deductible receipts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean In-Kind Donations */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              In-Kind Donations
            </h2>
            <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We also accept donations of medical equipment, supplies, and professional services
            </p>
          </div>
          
          <WishList />
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-lg mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="body-lg text-white/90 mb-8">
            Your donation, no matter the size, helps us provide essential healthcare services 
            and launch successfully in August 2025. Join us in building a healthier community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#donation-form" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Donate Now
              <Heart className="ml-2 w-4 h-4" />
            </a>
            <a href="/volunteer" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Volunteer Instead
              <Users className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 