<template>
  <footer class="bg-blue-900 z-[1000] text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Column 1: Logo & Description -->
        <div class="space-y-6">
          <NuxtLink to="/" class="text-2xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
            doc2doc.health
          </NuxtLink>
          <p class="text-blue-200 text-sm leading-relaxed">
            AI-Smart. Clinically Sharp. Your Virtual Scribe is an MD.
          </p>
          <p class="text-blue-300 text-xs italic">
            A Welkesa LLC Company
          </p>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener" 
               class="text-blue-300 hover:text-yellow-300 transition-colors duration-300">
              <component :is="social.icon" class="h-5 w-5" />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-yellow-300 uppercase tracking-wider mb-6">
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.path" 
                        class="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h3 class="text-sm font-semibold text-yellow-300 uppercase tracking-wider mb-6">
            Services
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <NuxtLink to="/services" class="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact CTA -->
        <div>
          <h3 class="text-sm font-semibold text-yellow-300 uppercase tracking-wider mb-6">
            Contact Us
          </h3>
          <p class="text-blue-200 text-sm mb-4">
            Ready to reclaim your time? Schedule a consultation with our physician team.
          </p>
          <NuxtLink to="/contact" 
                    class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-yellow-300/20 hover:border-yellow-300/40 inline-block text-center">
            Get Started
          </NuxtLink>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-blue-400 text-sm">
          &copy; {{ new Date().getFullYear() }} doc2doc.health (Welkesa LLC). All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <NuxtLink v-for="legal in legalLinks" :key="legal.name" :to="legal.path" 
             class="text-blue-400 hover:text-yellow-300 text-sm transition-colors duration-300">
            {{ legal.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Social Icons (using simple SVG components)
const TwitterIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>`
};

const LinkedinIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>`
};

const FacebookIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/></svg>`
};

// Data - Using your exact paths
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
];

const services = [
  'AI-Supported Note Editing',
  'Inbox & Lab Tracking',
  'Chart Preparation',
  'Referral Management',
  'Audio Transcription'
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'HIPAA Compliance', path: '/hipaa' }
];

const socialLinks = [
  { name: 'Twitter', url: '#', icon: TwitterIcon },
  { name: 'LinkedIn', url: '#', icon: LinkedinIcon },
  { name: 'Facebook', url: '#', icon: FacebookIcon }
];
</script>

<style scoped>
/* Smooth transitions for hover effects */
a, button {
  transition: all 0.3s ease;
}

/* Active link styling */
.router-link-active {
  @apply text-white font-medium;
}

/* Gradient animation on hover for buttons */
button:hover {
  background-size: 150% 150%;
  @apply shadow-yellow-300/20;
}
</style>