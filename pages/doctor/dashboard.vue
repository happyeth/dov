<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar Navigation -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 border-r border-gray-100">
      <div class="flex items-center justify-center h-20 px-4 bg-gradient-to-r from-blue-600 to-teal-500">
        <div class="flex items-center">
          <span class="text-white text-2xl font-bold">doc2doc.health</span>
          <span class="ml-2 px-2 py-1 bg-white bg-opacity-20 text-xs text-white rounded-full">MD Dashboard</span>
        </div>
      </div>
      <nav class="mt-8 px-4 space-y-2">
        <NuxtLink 
          to="/doctor" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 group"
        >
          <ChartBarIcon class="h-5 w-5 mr-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
          Dashboard
        </NuxtLink>
        <NuxtLink 
          to="/doctor/queue" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <InboxIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Task Queue
          <span class="ml-auto inline-block py-0.5 px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">5</span>
        </NuxtLink>
        <NuxtLink 
          to="/doctor/completed" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <CheckCircleIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Completed Notes
        </NuxtLink>
        <NuxtLink 
          to="/doctor/patients" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <UserIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          My Patients
        </NuxtLink>
        <NuxtLink 
          to="/doctor/resources" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <BookOpenIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Resources
        </NuxtLink>
      </nav>
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div class="flex items-center">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Doctor profile">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700">Dr. Gemechis</p>
            <p class="text-xs text-gray-500">Internal Medicine</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Physician</span> Dashboard
          </h1>
          <div class="flex items-center space-x-4">
            <button 
              @click="refreshQueue"
              class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-300 hover:shadow-lg"
            >
              <ArrowPathIcon class="h-4 w-4 mr-2 transition-transform duration-300" :class="{'animate-spin': isRefreshing}" />
              {{ isRefreshing ? 'Refreshing...' : 'Refresh Queue' }}
            </button>
            <button class="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none transition-colors">
              <BellIcon class="h-6 w-6" />
              <span class="sr-only">View notifications</span>
              <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Pending Notes" 
            value="5" 
            change="+2 today" 
            icon="InboxIcon"
            color="blue"
            trend="up"
          />
          <StatCard 
            title="Avg. Completion" 
            value="2.3h" 
            change="-0.4h" 
            icon="ClockIcon"
            color="purple"
            trend="down"
          />
          <StatCard 
            title="Quality Score" 
            value="98%" 
            change="+2%" 
            icon="StarIcon"
            color="amber"
            trend="up"
          />
          <StatCard 
            title="Active Patients" 
            value="24" 
            change="+3 this week" 
            icon="UserGroupIcon"
            color="teal"
            trend="up"
          />
        </div>

        <!-- Task Queue -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div class="bg-white shadow rounded-lg overflow-hidden lg:col-span-2">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Your Task Queue</h2>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Priority: High
                </span>
              </div>
              <div class="space-y-4">
                <TaskCard 
                  v-for="task in currentTasks"
                  :key="task.id"
                  :task="task"
                  @start="startTask(task)"
                />
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Recent Completions</h2>
                <NuxtLink 
                  to="/doctor/completed" 
                  class="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View all
                </NuxtLink>
              </div>
              <ul class="divide-y divide-gray-200">
                <CompletedNoteItem 
                  v-for="note in recentCompletions"
                  :key="note.id"
                  :note="note"
                />
              </ul>
            </div>
          </div>
        </div>

        <!-- Patient & Quality Metrics -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Upcoming Patients -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Upcoming Patients</h2>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Today
                </span>
              </div>
              <PatientTable 
                :patients="upcomingPatients"
              />
            </div>
          </div>

          <!-- Quality Feedback -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Quality Feedback</h2>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Last 7 Days
                </span>
              </div>
              <QualityFeedbackList 
                :feedback="qualityFeedback"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ChartBarIcon,
  InboxIcon,
  CheckCircleIcon,
  UserIcon,
  BookOpenIcon,
  BellIcon,
  ArrowPathIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'

const isRefreshing = ref(false)

const currentTasks = ref([
  {
    id: 1,
    doctor: 'Dr. Happy',
    patient: 'gemechis Kebede',
    type: 'Progress Note',
    priority: 'high',
    assigned: '2 hours ago',
    due: 'Today, 5:00 PM',
    status: 'pending'
  },
  {
    id: 2,
    doctor: 'Dr. Edelawit',
    patient: 'Meseret Abebe',
    type: 'Discharge Summary',
    priority: 'medium',
    assigned: '1 day ago',
    due: 'Tomorrow, 10:00 AM',
    status: 'pending'
  },
  {
    id: 3,
    doctor: 'Dr. Michael',
    patient: 'Tewodros Mekonnen',
    type: 'Consult Note',
    priority: 'low',
    assigned: '2 days ago',
    due: 'Tomorrow, 3:00 PM',
    status: 'pending'
  }
])

const recentCompletions = ref([
  {
    id: 1,
    doctor: 'Dr. Abel',
    patient: 'Tewodros Mekonnen',
    type: 'Initial Evaluation',
    completed: '2 hours ago',
    timeSpent: '1.5 hours',
    status: 'approved'
  },
  {
    id: 2,
    doctor: 'Dr. Happy',
    patient: 'Sarah Johnson',
    type: 'Consult Note',
    completed: 'Yesterday',
    timeSpent: '2.2 hours',
    status: 'approved'
  }
])

const upcomingPatients = ref([
  {
    id: 1,
    name: 'Alemayehu Kebede',
    time: '9:00 AM',
    reason: 'Follow-up',
    status: 'confirmed'
  },
  {
    id: 2,
    name: 'Meseret Abebe',
    time: '10:30 AM',
    reason: 'New patient',
    status: 'confirmed'
  },
  {
    id: 3,
    name: 'Tewodros Mekonnen',
    time: '2:00 PM',
    reason: 'Post-op check',
    status: 'confirmed'
  }
])

const qualityFeedback = ref([
  {
    id: 1,
    noteId: 'N-1001',
    rating: '5/5',
    comment: 'Excellent documentation with all relevant details captured accurately',
    date: 'Today'
  },
  {
    id: 2,
    noteId: 'N-0987',
    rating: '4/5',
    comment: 'Minor terminology corrections needed in assessment section',
    date: '2 days ago'
  }
])

const refreshQueue = () => {
  isRefreshing.value = true
  // Simulate API call
  setTimeout(() => {
    isRefreshing.value = false
  }, 1500)
}

const startTask = (task) => {
  console.log('Starting task:', task)
  // Implement task starting logic
}
</script>

<style scoped>
/* Custom animations */
.router-link-active {
  @apply bg-blue-50 text-blue-700 font-medium;
}

.router-link-active .group-hover\:text-blue-600 {
  @apply text-blue-700;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Spin animation for refresh */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>