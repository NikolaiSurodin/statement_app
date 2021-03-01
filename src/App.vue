<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { store } from "@/store"
export default {
    name:'App',
  beforeMount() {
      store.dispatch('checkAuth')
    .then(() => {})
  }
}
</script>

<style>

</style>