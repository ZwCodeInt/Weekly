<template>
  <div class="home">
    <home-header></home-header>
    <home-record></home-record>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from "@/components/home/header.vue";
import homeRecord from "@/components/home/record.vue";
export default {
  name: "home",
  components: {
    homeHeader,
    homeRecord
  }
};
</script>
<style>
  .home {
      height: 100%;
      overflow: scroll;
  }
</style>
