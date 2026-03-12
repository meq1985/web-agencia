<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)

const toggle = () => open.value = !open.value
const close = () => open.value = false

/* 🔥 cerrar automáticamente al volver a desktop */
const handleResize = () => {
  if (window.innerWidth > 900) {
    open.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav class="nav">

    <div class="container nav-inner">

      <!-- Logo -->
      <div class="logo" @click="$router.push('/')">
        TuMarca.dev
      </div>

      <!-- Desktop links -->
      <div class="links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/servicios">Servicios</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contacto" class="btn btn-primary">
          Contacto
        </router-link>
      </div>

      <!-- Burger -->
      <button class="burger" @click="toggle">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    
  </svg>
        <span v-if="!open">☰</span>
        <span v-else>✕</span>
    </button>

    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div v-if="open" class="overlay" @click="close" />
    </transition>

    <!-- Mobile drawer -->
    <transition name="slide">
      <div v-if="open" class="drawer">

        <router-link @click="close" to="/">Inicio</router-link>
        <router-link @click="close" to="/servicios">Servicios</router-link>
        <router-link @click="close" to="/nosotros">Nosotros</router-link>
        <router-link @click="close" to="/blog">Blog</router-link>
        <router-link @click="close" to="/contacto">Contacto</router-link>

      </div>
    </transition>

  </nav>
</template>

<style scoped>
/* ===== NAV ===== */
.nav{
  position:sticky;
  top:0;
  z-index:1000;
  width:100%;
  background:rgba(255,255,255,.9);
  backdrop-filter: blur(8px);
  border-bottom:1px solid #e5e7eb;
}

.nav-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:72px;
}

/* logo */
.logo{
  font-weight:700;
  cursor:pointer;
}

/* ===== DESKTOP LINKS ===== */
.links{
  display:flex;
  align-items:center;
  gap:30px;
}

.links a:not(.btn){
  text-decoration:none;
  color:#0f172a;
  font-weight:500;
}

.links a:not(.btn):hover{
  color:#2563eb;
}

/* ===== BURGER ===== */
.burger{
  display:none;
  font-size:26px;
  background:none;
  border:none;
  cursor:pointer;
  color:#0f172a;
  z-index:1100; 
}

/* ===== MOBILE DRAWER ===== */
.drawer{
  position:fixed;
  top:0;
  right:0;
  width:260px;
  height:100vh;
  background:white;

  display:flex;
  flex-direction:column;
  gap:22px;
  padding:90px 28px;

  box-shadow:-10px 0 30px rgba(0,0,0,.08);
}

.drawer a{
  text-decoration:none;
  color:#0f172a;
  font-size:1.1rem;
}

/* overlay oscuro */
.overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.25);
}

/* ===== ANIMACIONES ===== */
.fade-enter-active,
.fade-leave-active{
  transition:.2s;
}
.fade-enter-from,
.fade-leave-to{
  opacity:0;
}

.slide-enter-active{
  transition:.25s ease;
}
.slide-enter-from{
  transform:translateX(100%);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px){

  .links{
    display:none;
  }

  .burger{
    display:block;
  }

}
</style>