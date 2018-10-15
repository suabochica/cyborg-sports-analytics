<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/cyborg-logo.png">
    <Landing msg="Cyborg Sports"/>
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
