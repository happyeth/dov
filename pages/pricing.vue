<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-blue-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8a25d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          <span class="block">Exclusive Pricing for</span>
          <span class="block text-yellow-400">Our Founding Partners</span>
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          You're an innovator. We believe in rewarding those ready to change their practice for the better.
        </p>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg mb-6 shadow-lg">
            Limited-Time Founding Partner Offer
          </div>
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">
            50% Discount for Early Registrants
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            We're offering our first few pilot clients the full suite of Doc2Doc services at half the standard rate. 
            This exclusive pricing won't last forever.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Basic Plan -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
            <div class="px-6 py-8">
              <h3 class="text-2xl font-bold text-blue-900 mb-2">Basic</h3>
              <p class="text-gray-600 mb-6">For physicians needing partial support</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-blue-900">$X</span>
                <span class="text-gray-500 line-through ml-2">$2X</span>
                <span class="block text-yellow-600 font-medium">50% OFF</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>10 hours of scribing/month</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Basic chart completion</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>
            <div class="px-6 pb-8">
              <button 
                @click="navigateTo('/contact')" 
                class="w-full px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
              </button>
            </div>
          </div>

          <!-- Popular Plan -->
          <div class="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-yellow-400 transform scale-105 z-10">
            <div class="bg-yellow-400 text-blue-900 px-4 py-2 text-center font-bold">
              MOST POPULAR
            </div>
            <div class="px-6 py-8">
              <h3 class="text-2xl font-bold text-blue-900 mb-2">Standard</h3>
              <p class="text-gray-600 mb-6">Perfect for full-time practitioners</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-blue-900">$Y</span>
                <span class="text-gray-500 line-through ml-2">$2Y</span>
                <span class="block text-yellow-600 font-medium">50% OFF</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>40 hours of scribing/month</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Full chart completion</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Inbox management</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div class="px-6 pb-8">
              <button 
                @click="navigateTo('/contact')" 
                class="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
              >
                Claim 50% Discount
              </button>
            </div>
          </div>

          <!-- Premium Plan -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
            <div class="px-6 py-8">
              <h3 class="text-2xl font-bold text-blue-900 mb-2">Premium</h3>
              <p class="text-gray-600 mb-6">For high-volume practices</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-blue-900">$Z</span>
                <span class="text-gray-500 line-through ml-2">$2Z</span>
                <span class="block text-yellow-600 font-medium">50% OFF</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>80+ hours of scribing/month</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Complete administrative support</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Dedicated physician scribe</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>24/7 emergency support</span>
                </li>
              </ul>
            </div>
            <div class="px-6 pb-8">
              <button 
                @click="navigateTo('/contact')" 
                class="w-full px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Solutions -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div class="md:flex items-center justify-between">
            <div class="md:w-2/3 mb-8 md:mb-0">
              <h2 class="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p class="text-blue-100">
                Our goal is to provide a service that is both effective and affordable. 
                Contact us directly to discuss how Doc2Doc can transform your practice with a tailored plan.
              </p>
            </div>
            <div class="md:w-1/3 text-center md:text-right">
              <button 
                @click="navigateTo('/contact')" 
                class="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">
            What Our Founding Partners Say
          </h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex mb-4">
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="italic text-gray-700 mb-6">
              "The founding partner discount made it risk-free to try Doc2Doc. Now I can't imagine practicing without it. The time savings alone are worth triple what I pay."
            </p>
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold mr-4">
                SJ
              </div>
              <div>
                <h3 class="font-semibold">Dr. Sarah Johnson</h3>
                <p class="text-gray-500 text-sm">Internal Medicine</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex mb-4">
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
              <StarIcon class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="italic text-gray-700 mb-6">
              "As an early adopter, I not only got half-off pricing but also personalized onboarding. The ROI has been incredible - I see more patients with less stress."
            </p>
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold mr-4">
                MC
              </div>
              <div>
                <h3 class="font-semibold">Dr. Michael Chen</h3>
                <p class="text-gray-500 text-sm">Cardiology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold sm:text-4xl mb-6">
          Ready to Join Our Founding Partners?
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Claim your 50% discount before this limited-time offer expires.
        </p>
        <button 
          @click="navigateTo('/contact')" 
          class="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors shadow-lg"
        >
          Click to Claim Your Discount
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { CheckIcon, StarIcon } from '@heroicons/vue/24/outline';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style>
.bg-blue-900 {
  background-color: #1e3a8a;
}
.bg-blue-700 {
  background-color: #1d4ed8;
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
.bg-yellow-400 {
  background-color: #facc15;
}
.text-yellow-400 {
  color: #facc15;
}
</style>