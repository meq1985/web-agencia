<script setup>
defineProps({
  title: String
})
</script>

<template>
  <section class="page">

    <div class="page-grid">

      <!-- Columna izquierda vacía (margen visual) -->
      <div class="side"></div>

      <!-- Contenido principal -->
      <main class="content">

        <header v-if="title" class="page-header">
          <h1>{{ title }}</h1>
        </header>

        <div class="page-body">
          <slot />
        </div>

      </main>

      <!-- Columna derecha vacía -->
      <div class="side"></div>

    </div>

  </section>
</template>

<style scoped>

/* espacio vertical de página */
.page{
  padding:80px 0;
}

/* GRID PRINCIPAL */
.page-grid{
  display:grid;

  /* columnas: margen | contenido | margen */
  grid-template-columns:
    minmax(20px, 1fr)
    minmax(0, 900px)
    minmax(20px, 1fr);

  width:100%;
}

/* columna contenido */
.content{
  grid-column:2;
  width:100%;
}

/* header de página */
.page-header{
  margin-bottom:32px;
}

.page-header h1{
  font-size:2rem;
  font-weight:600;
}

/* cuerpo */
.page-body{
  display:flex;
  flex-direction:column;
  gap:20px;
}

/* responsive */
@media (max-width:768px){

  .page-grid{
    grid-template-columns:
      16px
      1fr
      16px;
  }

}

</style>