<!-- pages/dashboard.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <h1 class="text-3xl font-bold text-indigo-700 mb-6">
            Welcome, {{ auth.user.name }} ({{ auth.user.role }})
          </h1>
          
          <!-- Patient Dashboard -->
          <div v-if="auth.user.role === 'Patient'" class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h2 class="text-xl font-semibold text-indigo-800 mb-2">Your Appointments</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <h3 class="font-medium text-indigo-700">Upcoming Appointment</h3>
                  <p class="text-gray-600">Dr. Edelawit - Cardiology</p>
                  <p class="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <h3 class="font-medium text-indigo-700">Medical Records</h3>
                  <p class="text-gray-600">Last checkup: 2 weeks ago</p>
                </div>
              </div>
            </div>
            
            <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Book New Appointment
            </button>
          </div>
          
          <!-- Doctor Dashboard -->
          <div v-else-if="auth.user.role === 'Doctor'" class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h2 class="text-xl font-semibold text-indigo-800 mb-4">Today's Schedule</h2>
              <div class="space-y-3">
                <div v-for="appointment in doctorAppointments" :key="appointment.id" 
                     class="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                  <div class="flex justify-between items-center">
                    <div>
                      <h3 class="font-medium text-indigo-700">{{ appointment.patient }}</h3>
                      <p class="text-gray-600">{{ appointment.reason }}</p>
                    </div>
                    <span class="text-sm font-medium text-indigo-600">{{ appointment.time }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                <h3 class="font-medium text-indigo-700 mb-2">Patient Messages</h3>
                <p class="text-gray-600">3 unread messages</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                <h3 class="font-medium text-indigo-700 mb-2">Medical Reports</h3>
                <p class="text-gray-600">5 pending reports</p>
              </div>
            </div>
          </div>
          
          <!-- Admin Dashboard -->
          <div v-else-if="auth.user.role === 'Admin'" class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h2 class="text-xl font-semibold text-indigo-800 mb-4">Clinic Overview</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <h3 class="font-medium text-indigo-700">Total Patients</h3>
                  <p class="text-2xl font-bold text-indigo-600">1,248</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <h3 class="font-medium text-indigo-700">Active Doctors</h3>
                  <p class="text-2xl font-bold text-indigo-600">24</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <h3 class="font-medium text-indigo-700">Today's Appointments</h3>
                  <p class="text-2xl font-bold text-indigo-600">87</p>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                <h3 class="font-medium text-indigo-700 mb-2">Recent Activity</h3>
                <ul class="space-y-2">
                  <li v-for="activity in adminActivities" :key="activity.id" class="text-sm text-gray-600">
                    {{ activity.text }}
                  </li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                <h3 class="font-medium text-indigo-700 mb-2">System Alerts</h3>
                <div class="space-y-2">
                  <div v-for="alert in systemAlerts" :key="alert.id" 
                       class="p-2 bg-red-50 rounded text-sm text-red-600">
                    {{ alert.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuth();

// Redirect to login if not authenticated
if (!auth.value.isAuthenticated) {
  navigateTo('/login');
}

// Mock data for doctor dashboard
const doctorAppointments = [
  { id: 1, patient: 'Happy Patient', reason: 'Cardiology Checkup', time: '10:00 AM' },
  { id: 2, patient: 'John Doe', reason: 'Annual Physical', time: '11:30 AM' },
  { id: 3, patient: 'Sarah Smith', reason: 'Follow-up Visit', time: '2:00 PM' },
];

// Mock data for admin dashboard
const adminActivities = [
  { id: 1, text: 'New patient registration - Happy Patient' },
  { id: 2, text: 'Dr. Edelawit updated medical records' },
  { id: 3, text: 'System backup completed at 3:00 AM' },
];

const systemAlerts = [
  { id: 1, text: 'Storage usage at 85% capacity' },
  { id: 2, text: '2 pending doctor applications' },
];
</script>