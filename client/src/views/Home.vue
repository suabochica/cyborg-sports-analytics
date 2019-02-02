<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/csa_symbol_test02.png">
    <Landing msg="Entendiendo MEGVN"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "home",
  components: {
    Landing
  }
};
</script>
