<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar Navigation -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 border-r border-gray-100">
      <div class="flex items-center justify-center h-20 px-4 bg-gradient-to-r from-blue-600 to-teal-500">
        <div class="flex items-center">
          <span class="text-white text-2xl font-bold">doc2doc.health</span>
          <span class="ml-2 px-2 py-1 bg-white bg-opacity-20 text-xs text-white rounded-full">Admin</span>
        </div>
      </div>
      <nav class="mt-8 px-4 space-y-2">
        <NuxtLink 
          to="/admin" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 group"
        >
          <ChartBarIcon class="h-5 w-5 mr-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
          Dashboard
        </NuxtLink>
        <NuxtLink 
          to="/admin/physicians" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <UserGroupIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Physicians
          <span class="ml-auto inline-block py-0.5 px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">24</span>
        </NuxtLink>
        <NuxtLink 
          to="/admin/scribes" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <PencilIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Scribes
          <span class="ml-auto inline-block py-0.5 px-2 text-xs font-medium bg-green-100 text-green-800 rounded-full">18</span>
        </NuxtLink>
        <NuxtLink 
          to="/admin/documents" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <DocumentTextIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Documents
        </NuxtLink>
        <NuxtLink 
          to="/admin/quality" 
          class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 group transition-colors"
        >
          <ShieldCheckIcon class="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
          Quality
        </NuxtLink>
      </nav>
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div class="flex items-center">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Admin profile">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700">Dr Abel</p>
            <p class="text-xs text-gray-500">System Administrator</p>
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
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Admin</span> Dashboard
          </h1>
          <div class="flex items-center space-x-4">
            <button 
              @click="refreshData"
              class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-300 hover:shadow-lg"
            >
              <ArrowPathIcon class="h-4 w-4 mr-2 transition-transform duration-300" :class="{'animate-spin': isRefreshing}" />
              {{ isRefreshing ? 'Refreshing...' : 'Refresh Data' }}
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
            title="Active Physicians" 
            value="142" 
            change="+8 this week" 
            icon="UserGroupIcon"
            color="blue"
            trend="up"
          />
          <StatCard 
            title="MD Scribes" 
            value="28" 
            change="3 available" 
            icon="PencilIcon"
            color="teal"
            trend="neutral"
          />
          <StatCard 
            title="Avg. Turnaround" 
            value="5.2h" 
            change="-1.3h" 
            icon="ClockIcon"
            color="purple"
            trend="down"
          />
          <StatCard 
            title="Quality Score" 
            value="98.7%" 
            change="+2.1%" 
            icon="StarIcon"
            color="amber"
            trend="up"
          />
        </div>

        <!-- System Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <!-- Document Processing -->
          <div class="bg-white shadow rounded-lg overflow-hidden lg:col-span-2">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Document Processing</h2>
                <div class="flex space-x-2">
                  <button class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    Real-time
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-3">Workflow Status</h3>
                  <div class="space-y-4">
                    <ProgressBar 
                      label="Drafting" 
                      value="24" 
                      max="100" 
                      color="blue" 
                      description="AI processing"
                    />
                    <ProgressBar 
                      label="Review" 
                      value="18" 
                      max="100" 
                      color="purple" 
                      description="MD scribes working"
                    />
                    <ProgressBar 
                      label="Completed" 
                      value="58" 
                      max="100" 
                      color="green" 
                      description="Ready for physicians"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-3">Daily Volume</h3>
                  <BarChart 
                    :data="documentChartData"
                    :options="chartOptions"
                    class="h-48"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">System Activities</h2>
                <NuxtLink 
                  to="/admin/activities" 
                  class="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View all
                </NuxtLink>
              </div>
              <ul class="divide-y divide-gray-200">
                <ActivityItem 
                  v-for="activity in recentActivities"
                  :key="activity.id"
                  :activity="activity"
                />
              </ul>
            </div>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Top Physicians -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Top Physicians</h2>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Most Active
                </span>
              </div>
              <UserTable 
                :users="topPhysicians"
                :columns="['name', 'specialty', 'notes', 'lastActive']"
              />
            </div>
          </div>

          <!-- Scribe Performance -->
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-medium text-gray-900">Scribe Performance</h2>
                <button class="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Export Data
                </button>
              </div>
              <ScribePerformanceTable 
                :scribes="scribePerformance"
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
  UserGroupIcon,
  PencilIcon,
  ClockIcon,
  StarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BellIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const isRefreshing = ref(false)

const documentChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Notes Processed',
      data: [120, 190, 170, 210, 240, 80, 65],
      backgroundColor: '#3B82F6',
    },
    {
      label: 'Urgent Cases',
      data: [25, 30, 22, 35, 40, 15, 10],
      backgroundColor: '#8B5CF6',
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    }
  }
}

const recentActivities = [
  {
    id: 1,
    type: 'document',
    action: 'Dr. Alemayehu completed note review',
    time: '5 minutes ago',
    icon: 'DocumentCheckIcon',
    color: 'green'
  },
  {
    id: 2,
    type: 'system',
    action: 'Nightly backup completed',
    time: '2 hours ago',
    icon: 'ServerIcon',
    color: 'blue'
  },
  {
    id: 3,
    type: 'security',
    action: 'New admin login from Addis Ababa',
    time: '4 hours ago',
    icon: 'ShieldCheckIcon',
    color: 'purple'
  },
  {
    id: 4,
    type: 'user',
    action: 'Dr. Edelawit signed up',
    time: '1 day ago',
    icon: 'UserPlusIcon',
    color: 'teal'
  }
]

const topPhysicians = [
  {
    id: 1,
    name: 'Dr. Alemayehu',
    specialty: 'Internal Medicine',
    notes: '142',
    lastActive: '15 min ago',
    avatar: '/avatars/doctor1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Happy',
    specialty: 'Pediatrics',
    notes: '128',
    lastActive: '1 hour ago',
    avatar: '/avatars/doctor2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Michael',
    specialty: 'Cardiology',
    notes: '98',
    lastActive: '2 hours ago',
    avatar: '/avatars/doctor3.jpg'
  }
]

const scribePerformance = [
  {
    id: 1,
    name: 'Dr. Scribe 1',
    completed: 42,
    accuracy: '98.7%',
    avgTime: '1.2h',
    status: 'active'
  },
  {
    id: 2,
    name: 'Dr. Scribe 2',
    completed: 38,
    accuracy: '97.2%',
    avgTime: '1.5h',
    status: 'active'
  },
  {
    id: 3,
    name: 'Dr. Scribe 3',
    completed: 29,
    accuracy: '99.1%',
    avgTime: '0.9h',
    status: 'on break'
  }
]

const refreshData = () => {
  isRefreshing.value = true
  // Simulate API call
  setTimeout(() => {
    isRefreshing.value = false
  }, 1500)
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