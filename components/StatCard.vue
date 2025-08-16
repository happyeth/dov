<!-- components/StatCard.vue -->
<template>
  <div class="bg-white shadow-sm rounded-lg p-4">
    <div class="flex items-center">
      <div class="p-3 rounded-lg" :class="`bg-${color}-100`">
        <component 
          :is="iconComponent" 
          class="h-6 w-6" 
          :class="`text-${color}-600`" 
        />
      </div>
      <div class="ml-4">
        <p class="text-sm font-medium text-gray-500 truncate">
          {{ title }}
        </p>
        <p class="mt-1 text-2xl font-semibold text-gray-900">
          {{ value }}
        </p>
      </div>
    </div>
    <div class="mt-4">
      <span 
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" 
        :class="change.startsWith('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'"
      >
        {{ change }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  value: [String, Number],
  change: String,
  icon: String,
  color: {
    type: String,
    default: 'indigo'
  }
});

const iconComponent = computed(() => {
  const icons = {
    users: defineAsyncComponent(() => import('@heroicons/vue/24/outline/UsersIcon')),
    pencil: defineAsyncComponent(() => import('@heroicons/vue/24/outline/PencilIcon')),
    clock: defineAsyncComponent(() => import('@heroicons/vue/24/outline/ClockIcon')),
    inbox: defineAsyncComponent(() => import('@heroicons/vue/24/outline/InboxIcon')),
    star: defineAsyncComponent(() => import('@heroicons/vue/24/outline/StarIcon')),
    document: defineAsyncComponent(() => import('@heroicons/vue/24/outline/DocumentTextIcon')),
    calendar: defineAsyncComponent(() => import('@heroicons/vue/24/outline/CalendarIcon')),
    mail: defineAsyncComponent(() => import('@heroicons/vue/24/outline/EnvelopeIcon'))
  };
  return icons[props.icon] || icons.document;
});
</script>