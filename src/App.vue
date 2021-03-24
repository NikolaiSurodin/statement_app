<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {store} from "@/store"

export default {
  name: 'App',
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(err) {
      console.log(err)
    }
  },
  beforeMount() {
    this.$store.dispatch('checkAuth')
  },
  mounted() {
    this.$root.$on('logout', () => {
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