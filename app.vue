<template>
  <Navbar v-if="!isLoginPage" />
  <div>
    <PageTransition />
    <NuxtPage />  <!-- Auto-injects route-matched pages -->
    
    
  </div>
  <Footer />
</template>

<script setup>
// No backend needed
</script>


