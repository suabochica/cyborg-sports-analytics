<template>
  <div class="landing">
    <h1>{{ msg }}</h1>
    <p>
      Análisis complejos aplicados en estrategias y entrenamientos deportivos.
    </p>
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

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $bluelagoon;
}
</style>
