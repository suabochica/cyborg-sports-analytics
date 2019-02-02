<template>
  <div class="content">
    <h1>{{ msg }}</h1>
    <h4>Serie de ejemplos para comprender la pila MEGVN de tecnologías.</h4>
    <section class="align--left">
      <p>MEGVN hace referencia a:</p>
      <ul>
        <li>MySql</li>
        <li>Express</li>
        <li>GraphQL</li>
        <li>Vue</li>
        <li>Node</li>
      </ul>
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

h4 {
  font-style: italic;
}
</style>
