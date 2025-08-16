<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-blue-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          <span class="block">About</span>
          <span class="block text-yellow-400">Doc2Doc</span>
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Physician-powered solutions designed by doctors, for doctors
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:gap-12">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="bg-blue-50 rounded-2xl p-8 h-full">
              <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Doctors collaborating" class="rounded-lg shadow-lg w-full h-auto">
            </div>
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">Our Story</h2>
            <div class="h-1 w-20 bg-yellow-500 mb-8"></div>
            <p class="text-gray-600 mb-6">
              Doc2Doc was founded by physicians who experienced firsthand the crushing administrative burden of modern medical practice. After years of frustration with inefficient documentation systems and the limitations of non-clinical scribes, we set out to create a better solution.
            </p>
            <p class="text-gray-600 mb-6">
              Our mission is simple: to give physicians back the time they need to focus on what matters most - patient care. We combine physician expertise with cutting-edge technology to deliver unparalleled medical scribing services.
            </p>
            <p class="text-gray-600">
              Today, we serve practices across multiple specialties, helping dozens of physicians reclaim 10+ hours per week and rediscover their joy in medicine.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">Our Values</h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <div class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <UserGroupIcon class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">Physician-First</h3>
            <p class="text-gray-600">Everything we do is designed by physicians to solve real clinical workflow challenges.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div class="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <LightBulbIcon class="h-6 w-6 text-yellow-600" />
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">Innovation</h3>
            <p class="text-gray-600">We constantly evolve our services to meet the changing needs of modern medicine.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <div class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <HeartIcon class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">Patient-Centered</h3>
            <p class="text-gray-600">By supporting physicians, we ultimately improve care for every patient.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">Our Leadership</h2>
          <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            Meet the physician leaders driving innovation at Doc2Doc
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <!-- Dr. Abel Elias -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div class="w-full h-64 bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-blue-900">Dr. Abel Elias</h3>
              <p class="text-sm text-yellow-600 mb-2">Founder & CEO</p>
              <p class="text-sm text-gray-500">Physician entrepreneur leading innovation in healthcare technology.</p>
              <div class="mt-4 flex space-x-3">
                <a href="#" class="text-blue-400 hover:text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Dr. Edilawit -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div class="w-full h-64 bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-blue-900">Dr. Edilawit</h3>
              <p class="text-sm text-yellow-600 mb-2">Medical Director</p>
              <p class="text-sm text-gray-500">Talented physician overseeing clinical operations and patient care.</p>
              <div class="mt-4 flex space-x-3">
                <a href="#" class="text-blue-400 hover:text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
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
          Ready to join our mission?
        </h2>
        <p class="text-xl text-blue-800 max-w-3xl mx-auto mb-8">
          Experience the Doc2Doc difference and reclaim your time for medicine.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="navigateTo('/register')" 
            class="px-8 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors shadow-lg"
          >
            Start Free Trial
          </button>
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 rounded-lg border-2 border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/vue/24/outline';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style>
.bg-blue-900 {
  background-color: #1e3a8a;
}
.bg-blue-100 {
  background-color: #dbeafe;
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
.text-yellow-600 {
  color: #ca8a04;
}
</style>