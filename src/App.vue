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
    .then(() => {

    })
  },
  mounted() {
      this.$root.$on('logout',() =>{
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/register')
        })
      })
  }
}
</script>

<style>

</style>