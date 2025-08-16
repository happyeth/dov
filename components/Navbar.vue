<template>
  <nav class="fixed w-full bg-green-200 z-[1000] shadow-lg transition-all duration-300 border-b border-green-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo with phone number -->
        <div class="flex items-center space-x-6">
          <!-- Phone number -->
          <div class="hidden md:flex items-center space-x-2 animate-fade-in">
            <svg class="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 
                4.493a1 1 0 01-.502 1.21l-2.257 
                1.13a11.042 11.042 0 005.516 
                5.516l1.13-2.257a1 1 0 
                011.21-.502l4.493 1.498a1 1 0 
                01.684.949V19a2 2 0 01-2 2h-1C9.716 
                21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="text-green-900 font-semibold">+1 (240) 475-1441</span>
          </div>

          <!-- Logo -->
          <NuxtLink
            to="/"
            class="text-2xl font-bold text-green-900 hover:text-green-700 transition-colors duration-300 flex items-center relative"
          >
            <span
              class="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 animate-text-glow"
            >
              LOGO
            </span>
            <span class="h-6 w-6 rounded-full bg-green-600 opacity-30 animate-pulse absolute ml-6"></span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-green-800 hover:text-green-900 font-medium transition-all duration-300 relative group"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <span
              class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 group-hover:w-full"
              :class="{'w-full': $route.path === link.path}"
            ></span>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <NuxtLink
            to="/contact"
            class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span class="relative z-10">Contact us</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-12 origin-left transform translate-x-[-100%] group-hover:translate-x-[100%]"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:text-green-700 focus:outline-none transition-all duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6 transform transition-all duration-300"
              :class="{'rotate-90': isOpen, 'text-green-900': isOpen}"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div
        v-show="isOpen"
        class="md:hidden bg-green-100 shadow-xl rounded-b-lg overflow-hidden border-t border-green-300"
      >
        <div class="px-2 pt-2 pb-4 space-y-2 sm:px-3 animate-fade-in">
          <!-- Mobile phone -->
          <div class="flex items-center space-x-2 px-4 py-3">
            <svg class="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 
                4.493a1 1 0 01-.502 1.21l-2.257 
                1.13a11.042 11.042 0 005.516 
                5.516l1.13-2.257a1 1 0 
                011.21-.502l4.493 1.498a1 1 0 
                01.684.949V19a2 2 0 01-2 2h-1C9.716 
                21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="text-green-900 font-semibold">+1 (240) 475-1441</span>
          </div>

          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="isOpen = false"
            class="block px-4 py-3 rounded-lg text-base font-medium text-green-900 hover:text-white hover:bg-green-500/80 transition-all duration-300 flex items-center"
          >
            <span
              class="w-2 h-2 bg-green-600 rounded-full mr-3"
              :class="{'opacity-100': $route.path === link.path, 'opacity-0': $route.path !== link.path}"
            ></span>
            {{ link.name }}
          </NuxtLink>

          <div class="pt-2">
            <NuxtLink
              to="/contact"
              @click="isOpen = false"
              class="block w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 text-center shadow-lg"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Pricing', path: '/pricing' },
]

const isOpen = ref(false)
</script>

<style scoped>
.router-link-active {
  @apply text-green-900 font-bold;
}

/* Subtle glow effect for logo text */
@keyframes textGlow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(34,197,94,0.6), 0 0 10px rgba(22,163,74,0.6);
  }
  50% {
    text-shadow: 0 0 10px rgba(34,197,94,0.9), 0 0 20px rgba(22,163,74,0.8);
  }
}
.animate-text-glow {
  animation: textGlow 2.5s infinite ease-in-out;
}

/* Fade-in animation for items */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

/* Pulse for background circle */
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
