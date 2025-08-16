<template>
  <div class="relative flex items-center">
    <button
      type="button"
      class="relative inline-flex h-8 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      :class="{
        'bg-indigo-600': modelValue === 'annual',
        'bg-gray-200': modelValue === 'monthly'
      }"
      @click="toggle"
    >
      <span
        class="inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition-transform"
        :class="{
          'translate-x-5': modelValue === 'annual',
          'translate-x-1': modelValue === 'monthly'
        }"
      />
    </button>
    <span class="ml-3 text-sm">
      <span 
        class="font-medium"
        :class="{
          'text-gray-900': modelValue === 'annual',
          'text-gray-500': modelValue === 'monthly'
        }"
      >
        Annual Billing
      </span>
      <span class="mx-1 text-gray-400">/</span>
      <span 
        class="font-medium"
        :class="{
          'text-gray-900': modelValue === 'monthly',
          'text-gray-500': modelValue === 'annual'
        }"
      >
        Monthly Billing
      </span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: 'monthly',
    validator: (value) => ['monthly', 'annual'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  const newValue = props.modelValue === 'monthly' ? 'annual' : 'monthly'
  emit('update:modelValue', newValue)
}
</script>