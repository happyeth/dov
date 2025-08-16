<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-navy-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8a25d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <span class="text-2xl font-bold text-green-400">doc2doc.health</span>
          <span class="ml-3 px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-medium">Physician-Led</span>
        </div>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          <span class="block">Let's Transform</span>
          <span class="block text-green-400">Your Documentation</span>
        </h1>
        <p class="text-xl text-navy-100 max-w-3xl mx-auto">
          Reach out to learn how our physician-led virtual scribes can save you hours each week.
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16">
          <!-- Contact Form -->
          <div class="mb-16 lg:mb-0">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-navy-100">
              <h2 class="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <ChatBubbleLeftRightIcon class="h-8 w-8 text-green-500 mr-3" />
                Send us a message
              </h2>
              <form class="space-y-6">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label for="first-name" class="block text-sm font-medium text-navy-700">First name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      class="mt-1 block w-full rounded-lg border-navy-200 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                    >
                  </div>
                  <div>
                    <label for="last-name" class="block text-sm font-medium text-navy-700">Last name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      class="mt-1 block w-full rounded-lg border-navy-200 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                    >
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-navy-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="mt-1 block w-full rounded-lg border-navy-200 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                  >
                </div>
                
                <div>
                  <label for="practice-type" class="block text-sm font-medium text-navy-700">Specialty</label>
                  <select 
                    id="practice-type" 
                    class="mt-1 block w-full rounded-lg border-navy-200 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                  >
                    <option>Select your specialty</option>
                    <option>Primary Care</option>
                    <option>Internal Medicine</option>
                    <option>Family Medicine</option>
                    <option>Pediatrics</option>
                    <option>Cardiology</option>
                    <option>Other Specialty</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-navy-700">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    class="mt-1 block w-full rounded-lg border-navy-200 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                  ></textarea>
                </div>
                
                <div class="flex items-center">
                  <input 
                    id="privacy-policy" 
                    type="checkbox" 
                    class="h-4 w-4 rounded border-navy-300 text-green-600 focus:ring-green-500"
                  >
                  <label for="privacy-policy" class="ml-2 block text-sm text-navy-700">
                    I agree to the <a href="#" class="text-green-600 hover:text-green-500">Privacy Policy</a>
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                    <PaperAirplaneIcon class="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <!-- Contact Info & Demo -->
          <div class="space-y-8">
            <!-- Demo Card -->
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100">
              <h2 class="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <VideoCameraIcon class="h-8 w-8 text-green-500 mr-3" />
                Schedule a demo
              </h2>
              <p class="text-navy-600 mb-6">
                See doc2doc.health in action with a personalized 30-minute demo. We'll show you how our physician-led virtual scribes can save you 2+ hours daily.
              </p>
<<<<<<< HEAD
              <a 
                href="https://calendly.com/doc2doc-health/contact" 
                target="_blank"
                class="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 shadow-md"
              >
                Book a Demo
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </a>
=======
              <div class="relative group">
                <a 
                  href="https://calendly.com/happyeth321/30min" 
                  target="_blank"
                  class="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  Book a Demo
                  <ArrowRightIcon class="ml-2 h-5 w-5 group-hover:animate-bounce-right" />
                </a>
                <div class="absolute -bottom-2 -right-2 w-full h-full rounded-lg bg-blue-200 -z-10 group-hover:animate-pulse-slow"></div>
              </div>
>>>>>>> 2e6393cf27cbcb5162d7a2d90250b8982a1ef405
            </div>
            
            <!-- Contact Info Card -->
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-navy-100">
              <h2 class="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <InformationCircleIcon class="h-8 w-8 text-green-500 mr-3" />
                Contact information
              </h2>
              <div class="space-y-6">
                <div class="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <PhoneIcon class="h-6 w-6 text-green-600" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-navy-900">Phone</h3>
                    <p class="text-navy-600">(555) DOC-2DOC</p>
                  </div>
                </div>
                
                <div class="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <EnvelopeIcon class="h-6 w-6 text-green-600" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-navy-900">Email</h3>
                    <p class="text-navy-600">hello@doc2doc.health</p>
                  </div>
                </div>
                
                <div class="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <MapPinIcon class="h-6 w-6 text-green-600" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-navy-900">Headquarters</h3>
                    <p class="text-navy-600">123 Medical Innovation Drive<br>Boston, MA 02115</p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mt-8 pt-6 border-t border-navy-200">
                <h3 class="text-lg font-medium text-navy-900 mb-4">Connect with us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="text-navy-400 hover:text-green-600">
                    <span class="sr-only">LinkedIn</span>
                    <LinkedInIcon class="h-6 w-6" />
                  </a>
                  <a href="#" class="text-navy-400 hover:text-green-600">
                    <span class="sr-only">Twitter</span>
                    <TwitterIcon class="h-6 w-6" />
                  </a>
                  <a href="#" class="text-navy-400 hover:text-green-600">
                    <span class="sr-only">Facebook</span>
                    <FacebookIcon class="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-20 bg-navy-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            TRUSTED BY PHYSICIANS
          </span>
          <h2 class="text-3xl font-bold text-navy-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center mb-4">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name" 
                class="h-12 w-12 rounded-full object-cover"
              >
              <div class="ml-4">
                <h3 class="text-lg font-medium text-navy-900">{{ testimonial.name }}</h3>
                <p class="text-sm text-navy-500">{{ testimonial.title }}</p>
              </div>
            </div>
            <div class="flex mb-3">
              <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="text-navy-600 italic mb-4">"{{ testimonial.quote }}"</p>
            <div class="mt-4 pt-4 border-t border-navy-100 flex items-center text-sm text-navy-500">
              <CalendarIcon class="h-4 w-4 mr-2" />
              {{ testimonial.date }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            HAVE QUESTIONS?
          </span>
          <h2 class="text-3xl font-bold text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs"
              :key="index"
              class="bg-white border border-navy-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
              >
                <span class="font-medium text-navy-900">{{ faq.question }}</span>
                <ChevronDownIcon 
                  class="h-5 w-5 text-green-600 transition-transform"
                  :class="{ 'transform rotate-180': faq.open }"
                />
              </button>
              <div 
                v-show="faq.open"
                class="px-6 pb-4 text-navy-600"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-green-600">
      <div class="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:py-24 text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Ready to reclaim your clinical time?
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-green-100">
          Join hundreds of physicians who trust doc2doc.health with their clinical documentation.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-4 border border-transparent text-base font-medium rounded-full text-green-600 bg-white hover:bg-navy-100 shadow-md"
          >
            Start Free Trial
          </button>
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-green-700 shadow-md"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  StarIcon,
  CalendarIcon
} from '@heroicons/vue/24/outline'

// Custom social icons
const LinkedInIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
    </svg>
  `
}

const TwitterIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
    </svg>
  `
}

const FacebookIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
    </svg>
  `
}

const testimonials = ref([
  {
    name: 'Dr. Sarah Johnson',
    title: 'Family Medicine, CA',
    quote: 'doc2doc.health cut my charting time from 3 hours to just 45 minutes daily. The physician scribes understand clinical context perfectly.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    date: '2 months ago'
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Cardiology, NY',
    quote: 'As a specialist, I need precise documentation. The physician scribes at doc2doc.health understand cardiology terminology flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    date: '3 weeks ago'
  },
  {
    name: 'Dr. Priya Patel',
    title: 'Pediatrics, TX',
    quote: 'The combination of physician expertise with AI efficiency is game-changing. I\'ve regained time with my family while maintaining excellent documentation.',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    date: '1 month ago'
  }
])

const faqs = ref([
  {
    question: "How quickly can I get started with doc2doc.health?",
    answer: "Most physicians can onboard within 24-48 hours. We'll connect with your EMR and match you with a physician scribe who understands your specialty.",
    open: false
  },
  {
    question: "Is doc2doc.health HIPAA compliant?",
    answer: "Absolutely. We use enterprise-grade security including end-to-end encryption, strict access controls, and regular audits to ensure complete HIPAA compliance.",
    open: false
  },
  {
    question: "What EMR systems do you support?",
    answer: "We're compatible with all major EMRs including Epic, Cerner, Meditech, Athenahealth, eClinicalWorks, and more. Our team will configure the optimal workflow for your system.",
    open: false
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible plans based on your volume and needs. Most physicians save 50%+ compared to traditional scribes while getting higher quality documentation from fellow MDs.",
    open: false
  },
  {
    question: "Can I try before committing?",
    answer: "Yes! We offer a 14-day free trial so you can experience the doc2doc.health difference with no obligation.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const navigateTo = (path) => {
  // Router navigation logic here
  console.log(`Navigating to: ${path}`)
}
</script>

<style>
/* Custom color palette */
.bg-navy-900 {
  background-color: #0f172a;
}
.bg-navy-800 {
  background-color: #1e293b;
}
.bg-navy-50 {
  background-color: #f8fafc;
}
.text-navy-900 {
  color: #0f172a;
}
.text-navy-700 {
  color: #334155;
}
.text-navy-600 {
  color: #475569;
}
.text-navy-500 {
  color: #64748b;
}
.text-navy-400 {
  color: #94a3b8;
}
.text-navy-100 {
  color: #f1f5f9;
}
.bg-green-600 {
  background-color: #16a34a;
}
.bg-green-500 {
  background-color: #22c55e;
}
.text-green-600 {
  color: #16a34a;
}
.text-green-500 {
  color: #22c55e;
}
.text-green-400 {
  color: #4ade80;
}
.bg-green-100 {
  background-color: #dcfce7;
}
.border-navy-200 {
  border-color: #e2e8f0;
}
.border-navy-100 {
  border-color: #f1f5f9;
}
</style>
