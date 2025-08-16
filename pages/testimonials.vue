<template>
  <section class="py-20 bg-blue-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold sm:text-4xl mb-6">
          Trusted by Physicians
        </h2>
        <div class="h-1 w-20 bg-yellow-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-blue-800 p-8 rounded-xl">
          <div class="flex mb-4">
            <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
          </div>
          <p class="italic text-blue-100 mb-6">"{{ testimonial.quote }}"</p>
          <div class="flex items-center">
            <div v-if="testimonial.avatar" class="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="h-full w-full object-cover">
            </div>
            <div v-else class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold mr-4">
              {{ testimonial.name.split(' ').map(n => n[0]).join('') }}
            </div>
            <div>
              <h3 class="font-semibold">{{ testimonial.name }}</h3>
              <p class="text-blue-300 text-sm">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { StarIcon } from '@heroicons/vue/24/outline'

export default {
  data() {
    return {
      testimonials: []
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost/api.php') // Update with your actual path
      this.testimonials = await response.json()
    } catch (error) {
      console.error('Error loading testimonials:', error)
    }
  },
  components: {
    StarIcon
  }
}
</script>