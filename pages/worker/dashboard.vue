<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar Navigation -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50">
      <div class="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-blue-600 to-teal-500">
        <div class="flex items-center">
          <span class="text-white text-xl font-bold">doc2doc.health</span>
          <span class="ml-2 px-2 py-1 bg-blue-100 bg-opacity-20 text-xs text-white rounded-full">MD Scribe</span>
        </div>
      </div>
      <nav class="mt-8 px-4 space-y-1">
        <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-50 text-blue-700">
          <ChartBarIcon class="h-5 w-5 mr-3 text-blue-600" />
          Dashboard
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
          <InboxIcon class="h-5 w-5 mr-3 text-gray-500" />
          Task Queue
          <span class="ml-auto inline-block py-0.5 px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">5</span>
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
          <CheckCircleIcon class="h-5 w-5 mr-3 text-gray-500" />
          Completed Notes
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
          <ShieldCheckIcon class="h-5 w-5 mr-3 text-gray-500" />
          Quality Review
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
          <BookOpenIcon class="h-5 w-5 mr-3 text-gray-500" />
          Resources
        </a>
      </nav>
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div class="flex items-center">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="User profile">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700">Dr. Edelawit</p>
            <p class="text-xs text-gray-500">Internal Medicine Scribe</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Medical Scribe</span> Dashboard
          </h1>
          <div class="flex items-center space-x-4">
            <button 
              @click="refreshQueue"
              class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            >
              <RefreshIcon class="h-4 w-4 mr-2" />
              Refresh Queue
            </button>
            <button class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <BellIcon class="h-6 w-6" />
              <span class="sr-only">View notifications</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <InboxIcon class="h-6 w-6 text-blue-600" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Assigned Tasks</dt>
                    <dd>
                      <div class="text-lg font-medium text-gray-900">5</div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="mt-4">
                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +2 from yesterday
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <ClockIcon class="h-6 w-6 text-green-600" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Avg. Completion</dt>
                    <dd>
                      <div class="text-lg font-medium text-gray-900">2.3 hours</div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="mt-4">
                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  -0.4h improvement
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
                  <StarIcon class="h-6 w-6 text-purple-600" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Quality Score</dt>
                    <dd>
                      <div class="text-lg font-medium text-gray-900">98%</div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="mt-4">
                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +2% from last week
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Task Queue -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium text-gray-900">Your Task Queue</h2>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Priority: High
            </span>
          </div>
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul class="divide-y divide-gray-200">
              <li v-for="task in currentTasks" :key="task.id">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="mr-2" :class="{
                        'text-red-500': task.priority === 'high',
                        'text-yellow-500': task.priority === 'medium',
                        'text-green-500': task.priority === 'low'
                      }">
                        <ExclamationCircleIcon v-if="task.priority === 'high'" class="h-5 w-5" />
                        <ExclamationTriangleIcon v-else-if="task.priority === 'medium'" class="h-5 w-5" />
                        <CheckCircleIcon v-else class="h-5 w-5" />
                      </span>
                      <p class="text-sm font-medium text-blue-600 truncate">
                        {{ task.type }} for {{ task.patient }}
                      </p>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <button class="ml-2 px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                        Start Note
                      </button>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500">
                        <UserIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {{ task.doctor }}
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <CalendarIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        Assigned {{ task.assigned }}
                      </p>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <ClockIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      Due {{ task.due }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <!-- Recent Completions -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <CheckCircleIcon class="h-5 w-5 text-green-500 mr-2" />
                Recent Completions
              </h3>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="note in recentCompletions" :key="note.id" class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-blue-600 truncate">
                    {{ note.type }} for {{ note.patient }}
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-sm text-gray-500">
                      <UserIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {{ note.doctor }}
                    </p>
                  </div>
                  <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <ClockIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {{ note.timeSpent }} • {{ note.completed }}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Quality Feedback -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <ShieldCheckIcon class="h-5 w-5 text-purple-500 mr-2" />
                Quality Feedback
              </h3>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="feedback in qualityFeedback" :key="feedback.id" class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-blue-600 truncate">
                    Note #{{ feedback.noteId }}
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {{ feedback.rating }}
                    </span>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ feedback.comment }}
                  </p>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {{ feedback.date }}
                </div>
              </li>
            </ul>
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
  ShieldCheckIcon,
  BookOpenIcon,
  BellIcon,
  ArrowPathIcon as RefreshIcon, // RefreshIcon is called ArrowPathIcon in v2
  UserIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const currentTasks = ref([
  {
    id: 1,
    doctor: 'Dr. Happy',
    patient: 'Alemayehu Kebede',
    type: 'Progress Note',
    priority: 'high',
    assigned: '2 hours ago',
    due: 'Today, 5:00 PM'
  },
  {
    id: 2,
    doctor: 'Dr. Edelawit',
    patient: 'Meseret Abebe',
    type: 'Discharge Summary',
    priority: 'medium',
    assigned: '1 day ago',
    due: 'Tomorrow, 10:00 AM'
  },
  {
    id: 3,
    doctor: 'Dr. Michael',
    patient: 'Tewodros Mekonnen',
    type: 'Consult Note',
    priority: 'low',
    assigned: '2 days ago',
    due: 'Tomorrow, 3:00 PM'
  }
])

const recentCompletions = ref([
  {
    id: 1,
    doctor: 'Dr. Abel',
    patient: 'Tewodros Mekonnen',
    type: 'Initial Evaluation',
    completed: '2 hours ago',
    timeSpent: '1.5 hours'
  },
  {
    id: 2,
    doctor: 'Dr. Happy',
    patient: 'Sarah Johnson',
    type: 'Consult Note',
    completed: 'Yesterday',
    timeSpent: '2.2 hours'
  },
  {
    id: 3,
    doctor: 'Dr. Priya',
    patient: 'Daniel Getachew',
    type: 'Procedure Note',
    completed: '2 days ago',
    timeSpent: '1.8 hours'
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
  },
  {
    id: 3,
    noteId: 'N-0972',
    rating: '5/5',
    comment: 'Perfect documentation - exemplary clinical details',
    date: '3 days ago'
  }
])

const refreshQueue = () => {
  // Implementation to refresh task queue
  console.log('Refreshing task queue')
}
</script>

<style>
/* Custom animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>