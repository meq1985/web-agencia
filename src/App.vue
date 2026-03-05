<template>
  <Navbar />
  <router-view />
  <WhatsAppButton />
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
//import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>