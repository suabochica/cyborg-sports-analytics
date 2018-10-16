<template>
  <div class="landing">
    <h1>{{ msg }}</h1>
    <h4>Análisis complejos de datos aplicados en estrategias y entrenamientos deportivos.</h4>
    <section class="landing__section--mision">
      <p>Utilizamos la tecnología aplicada al deporte para analizar situaciones y rendimientos, permitiendo al usuario entender la situación actual y desarrollar estrategias a partir de estadísticas de datos complejos. A través de la innovación tecnología desarrollamos herramientas que generan una ventaja competitiva en el deporte y la vida. Nos fundamentamos en el esfuerzo y la pasión.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/main.scss";

.landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @include breakpoint(desktop) {
    margin: 0 auto;
    max-width: 640px;
  }
}

h4 {
  font-style: italic;
}

.landing__section--mision {
  text-align: left;
}
</style>
