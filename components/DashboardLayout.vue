<!-- components/DashboardLayout.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-indigo-800">{{ title }}</h1>
          <p class="text-gray-600 mt-1">{{ subtitle }}</p>
        </div>
        <div class="flex space-x-3">
          <slot name="header-actions"></slot>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white shadow-sm rounded-lg p-4 sticky top-6">
            <nav class="space-y-1">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.name"
                :to="item.path"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md group"
                :class="[
                  $route.path === item.path 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                ]"
              >
                <span class="truncate">{{ item.name }}</span>
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="lg:col-span-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  navItems: Array
});
</script>