<script setup>
</script>

<script setup>
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">

      <h1>
        Digitalizá tu pyme sin complicaciones
      </h1>

      <p class="subtitle">
        Sistemas de gestión, páginas web y automatización
        para negocios argentinos. Implementación rápida y soporte real.
      </p>

      <div class="actions">
        <a
          href="https://wa.me/5492964XXXXXX"
          target="_blank"
          class="btn btn-primary"
        >
          Pedir asesoramiento
        </a>

        <router-link
          to="/servicios"
          class="btn btn-outline"
        >
          Ver servicios
        </router-link>
      </div>

      <!-- micro confianza -->
      <p class="trust">
        Implementación en días • Sin contratos largos • Soporte directo
      </p>

    </div>
  </section>
</template>

<style scoped>
.hero{
  padding:120px 20px 100px;
  background:linear-gradient(to bottom,#ffffff,#f7f8fa);
  text-align:center;
}

.hero-inner{
  max-width:800px;
}

h1{
  font-size:3rem;
  font-weight:700;
  margin-bottom:20px;
}

.subtitle{
  font-size:1.2rem;
  color:#475569;
  margin-bottom:32px;
}

.actions{
  display:flex;
  gap:14px;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom:22px;
}

.trust{
  font-size:.9rem;
  color:#64748b;
}

@media (max-width:768px){
  h1{
    font-size:2rem;
  }
}
</style>