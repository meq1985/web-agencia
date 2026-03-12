<template>
  <Navbar />

  <main class="site-content">
    <router-view />
  </main>

  <WhatsAppButton />
 
</template>

<script setup>
import Navbar from './components/Navbar.vue'

import WhatsAppButton from './components/WhatsAppButton.vue'
</script>