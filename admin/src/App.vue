<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  name = "app";

  async created() {
    await this.$http.get("/");
  }
}
</script>

<style></style>
