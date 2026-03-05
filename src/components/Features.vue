<template>
  <section>
    <div class="container">

      <h2 class="title">
        Todo lo que tu negocio necesita para crecer
      </h2>

      <div class="grid">

        <div class="card">
          <h3>⚡ Implementación rápida</h3>
          <p>Tu sistema funcionando en días, no meses.</p>
        </div>

        <div class="card">
          <h3>🧩 A medida</h3>
          <p>Nos adaptamos a tu forma de trabajar, no al revés.</p>
        </div>

        <div class="card">
          <h3>☁ 100% online</h3>
          <p>Accedé desde PC o celular, estés donde estés.</p>
        </div>

        <div class="card">
          <h3>🤝 Soporte humano</h3>
          <p>Hablás directamente con quien desarrolló tu sistema.</p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.title{
  text-align:center;
  font-size:2rem;
  margin-bottom:50px;
}

.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap:22px;
}
</style>