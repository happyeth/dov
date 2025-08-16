<template>
  <div class="bg-white">
    <section class="relative bg-blue-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          <span class="block">Physician-Powered</span>
          <span class="block text-yellow-400">Medical Scribing</span>
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Unparalleled clinical documentation by physicians, for physicians
        </p>
        <div class="mt-10 flex justify-center gap-4">
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 rounded-lg bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">
            What We Do: Charting & Inbox Management
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            doc2doc.health is your dedicated physician scribe service, built by physicians for physicians. We seamlessly handle the administrative tasks that slow you down, allowing you to reclaim your time and focus on patient care.
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">
            Our Core Services
          </h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Medical Charting -->
          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div class="flex items-center mb-6">
              <div class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <DocumentTextIcon class="h-6 w-6 text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-blue-900">Medical Charting</h3>
            </div>
            <p class="text-gray-700 mb-6">
              Our scribes will manage your clinical documentation, ensuring every chart is accurate, complete, and up-to-date.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Real-time documentation during patient encounters</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Completing all follow-up notes and coding</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Finalizing patient records and visit summaries</p>
              </li>
            </ul>
          </div>

          <!-- Inbox Management -->
          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
            <div class="flex items-center mb-6">
              <div class="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <InboxIcon class="h-6 w-6 text-yellow-600" />
              </div>
              <h3 class="text-2xl font-bold text-blue-900">Inbox Management</h3>
            </div>
            <p class="text-gray-700 mb-6">
              We act as a professional extension of your practice, managing the constant flow of messages and lab results in your EMR inbox.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Triaging and prioritizing messages from patients and staff</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Following up on lab results and documenting them in the patient's chart</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckIcon class="h-3 w-3 text-blue-900" />
                  </div>
                </div>
                <p class="ml-3 text-gray-700">Responding to routine patient inquiries and prescription refill requests</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">
            The Doc2Doc Difference
          </h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="text-center p-6">
            <div class="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <component :is="benefit.icon" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">
            Simple Integration Process
          </h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(step, index) in steps" :key="index" class="bg-white p-8 rounded-xl shadow-md text-center">
            <div class="mx-auto h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold sm:text-4xl mb-6">
            Trusted by Physicians
          </h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-blue-800 p-8 rounded-xl">
            <div class="flex mb-4">
              <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="italic text-blue-100 mb-6">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full" />
              <div class="ml-4">
                <h3 class="font-semibold">{{ testimonial.name }}</h3>
                <p class="text-blue-300 text-sm">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-yellow-400 text-blue-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold sm:text-4xl mb-6">
          Ready to reclaim your time?
        </h2>
        <p class="text-xl text-blue-800 max-w-3xl mx-auto mb-8">
          Experience the Doc2Doc difference with our physician-powered scribing
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors shadow-lg"
          >
            Start Free Trial
          </button>
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 rounded-lg border-2 border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {
  DocumentTextIcon,
  InboxIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/vue/24/outline';

const router = useRouter();
import { ComputerDesktopIcon } from '@heroicons/vue/24/outline';


const benefits = [
  {
    icon: ClockIcon,
    title: 'Time Savings',
    description: 'Save 10+ hours per week on administrative tasks'
  },
  {
  icon: ComputerDesktopIcon,
  title: 'Remote Scribing',
  description: 'Virtual support from anywhere with secure EHR access'
},
  {
    icon: ShieldCheckIcon,
    title: 'HIPAA Compliant',
    description: 'Secure handling of all patient information'
  }
];

const steps = [
  {
    title: 'Onboarding Call',
    description: 'We learn about your practice and documentation needs'
  },
  {
    title: 'EMR Integration',
    description: 'Seamless connection with your existing systems'
  },
  {
    title: 'Start Saving Time',
    description: 'Begin seeing immediate reductions in your admin workload'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Internal Medicine',
    quote: 'Doc2Doc has given me back my evenings with family. The physician-level understanding of my notes is unparalleled.',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Cardiology',
    quote: 'My inbox management is now handled by professionals who understand cardiology. The quality of responses has improved dramatically.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
  }
];

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style>
.bg-blue-900 {
  background-color: #1e3a8a;
}
.bg-blue-800 {
  background-color: #1e40af;
}
.bg-blue-50 {
  background-color: #eff6ff;
}
.text-blue-900 {
  color: #1e3a8a;
}
.text-blue-100 {
  color: #dbeafe;
}
.text-blue-300 {
  color: #93c5fd;
}
.bg-yellow-400 {
  background-color: #facc15;
}
.bg-yellow-100 {
  background-color: #fef9c3;
}
.text-yellow-400 {
  color: #facc15;
}
.text-yellow-600 {
  color: #ca8a04;
}
</style>