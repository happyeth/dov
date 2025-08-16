<template>
  <Transition name="page-transition">
    <div v-if="isLoading" class="page-loader">
      <div class="loader-content">
        <!-- Animated SVG logo or custom loader -->
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div class="text">Loading...</div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isLoading = ref(false)
const router = useRouter()

// Show loader when route changes start
router.beforeEach(() => {
  isLoading.value = true
})

// Hide loader when route changes complete
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300) // Matches transition duration
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.loader-content {
  text-align: center;
}

.spinner {
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.spinner .path {
  stroke: #4f46e5; /* Your brand color */
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

.text {
  color: #4f46e5; /* Your brand color */
  font-weight: 500;
  letter-spacing: 0.05em;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

/* Transition effects */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}
</style>