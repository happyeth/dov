<template>
  <div class="bg-white">
    <!-- Top Bar -->
    <div class="bg-blue-900 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <PhoneIcon class="h-4 w-4 text-yellow-400" />
          <span class="text-sm font-medium">+1 (240) 475-1441</span>
        </div>
        <span class="text-xs text-yellow-400">{{ currentDate }}</span>
      </div>
    </div>

    <!-- Welcome Section -->
    <section class="relative bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 class="text-5xl font-extrabold text-blue-900 tracking-tight">
          Welcome to <span class="text-yellow-500">Doc2Doc</span>
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Reclaim your time with physician-powered scribing.  
          Let us handle the paperwork so you can focus on what matters most.
        </p>
      </div>
    </section>

    <!-- Section 1: The Pitch -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-extrabold text-blue-900 sm:text-4xl">
              Are you spending your evenings catching up on charting instead of with your family?
            </h2>
            <p class="mt-6 text-lg text-gray-600">
              My team of physician scribes can help. We provide a physician's eye to your administrative tasks, ensuring clinical accuracy and saving you hours of work each week. Unlike a typical MA or AI, our scribes are critically trained to understand what is relevant and not.
            </p>
            <div class="mt-8">
              <button 
                @click="navigateTo('/contact')" 
                class="px-8 py-3 text-base font-medium rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
              </button>
            </div>
          </div>
          <div class="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            <div class="bg-blue-50 rounded-2xl p-8 shadow-inner border-2 border-blue-100">
              <div class="relative aspect-w-16 aspect-h-9">
                <div class="absolute inset-0 bg-blue-200 rounded-lg flex items-center justify-center">
                  <span class="text-blue-800 text-lg font-medium">Physician working late animation</span>
                </div>
              </div>
              <div class="mt-6 text-center">
                <p class="text-blue-900 font-medium">"Doc2Doc gave me back 12 hours a week with my family"</p>
                <p class="text-sm text-gray-600 mt-2">- Dr. Sarah Johnson, Internal Medicine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: The Problem with Visual Cards -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            The Facts Behind Physician Burnout
          </h2>
          <div class="mt-4 h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1: Bar Chart -->
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <h3 class="text-blue-900 text-xl font-semibold mb-4">45% of Physicians</h3>
            <Bar :data="barData" :options="barOptions" />
          </div>

          <!-- Card 2: Clock -->
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500 flex flex-col items-center">
            <h3 class="text-blue-900 text-xl font-semibold mb-4">7.9 hrs / week</h3>
            <div class="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center shadow-inner">
              <ClockIcon class="h-16 w-16 text-blue-600 animate-pulse" />
            </div>
            <p class="text-gray-600 mt-4 text-center">Average time spent on admin work</p>
          </div>

          <!-- Card 3: Donut Chart -->
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <h3 class="text-blue-900 text-xl font-semibold mb-4">20% of Doctors</h3>
            <Doughnut :data="pieData" :options="pieOptions" />
            <p class="text-gray-600 mt-4 text-center">Working after hours ("pajama time")</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: The Solution -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Put Your Burden On Us
          </h2>
          <div class="mt-4 h-1 w-20 bg-yellow-500 mx-auto"></div>
          <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Save a minimum of 10 hours a week with our specialized MD scribe service. doc2doc.health is designed to give you back the time you deserve, both in your clinical practice and in your personal life.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <div class="bg-blue-50 rounded-2xl p-8 h-full">
              <h3 class="text-xl font-bold text-blue-900 mb-4">Our Physician Scribe Difference</h3>
              <p class="text-gray-700 mb-6">
                Our scribes are not just assistants—they are critically trained physicians who understand what is medically relevant. They seamlessly handle your administrative workload so you can focus on what matters most.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <CheckIcon class="h-3 w-3 text-blue-900" />
                    </div>
                  </div>
                  <p class="ml-3 text-gray-700">More Time for Your Family: Say goodbye to after-hours charting and the stress that follows you home.</p>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <CheckIcon class="h-3 w-3 text-blue-900" />
                    </div>
                  </div>
                  <p class="ml-3 text-gray-700">More Time for Clinical Practice: Be more present and focused during patient encounters.</p>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <CheckIcon class="h-3 w-3 text-blue-900" />
                    </div>
                  </div>
                  <p class="ml-3 text-gray-700">A Happier, More Stress-Free Life: Offload the tasks that lead to burnout and reclaim your joy in medicine.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-blue-900 rounded-2xl p-8 h-full text-white">
              <h3 class="text-xl font-bold text-yellow-400 mb-4">How It Works</h3>
              <div class="space-y-6">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">1</div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold">Sign Up</h4>
                    <p class="mt-1 text-blue-200">Register for your free trial and connect your EHR system.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">2</div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold">Get Matched</h4>
                    <p class="mt-1 text-blue-200">We pair you with a physician scribe trained in your specialty.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">3</div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold">Reclaim Your Time</h4>
                    <p class="mt-1 text-blue-200">Watch your administrative burden disappear while maintaining clinical accuracy.</p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <button 
                  @click="navigateTo('/contact')" 
                  class="w-full px-6 py-3 text-base font-medium rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to Take Back Your Time?
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-yellow-300">
          Join dozens of physicians who have reclaimed 10+ hours per week with Doc2Doc.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 text-base font-medium rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-all"
          >
            Start Free Trial
          </button>
          <button 
            @click="navigateTo('/contact')" 
            class="px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { PhoneIcon, ClockIcon, CheckIcon } from '@heroicons/vue/24/outline'

// Vue-ChartJS imports
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale)

const router = useRouter()

// Current date
const currentDate = computed(() => {
  const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }
  return new Date().toLocaleDateString('en-US', options)
})

const navigateTo = (path) => {
  router.push(path)
}

// Bar chart data
const barData = {
  labels: ['Stress', 'Burnout', 'Others'],
  datasets: [
    {
      label: 'Physician Burnout',
      backgroundColor: '#2563eb',
      data: [45, 35, 20],
      borderRadius: 8
    }
  ]
}

const barOptions = {
  responsive: true,
  plugins: { legend: { display: false } }
}

// Pie chart data
const pieData = {
  labels: ['After Hours', 'Normal Hours'],
  datasets: [
    {
      backgroundColor: ['#2563eb', '#93c5fd'],
      data: [20, 80]
    }
  ]
}

const pieOptions = {
  responsive: true,
  plugins: { legend: { position: 'bottom' } }
}
</script>

<style>
.bg-blue-900 { background-color: #1e3a8a; }
.text-blue-900 { color: #1e3a8a; }
</style>