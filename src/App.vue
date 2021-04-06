<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    check() {
      this.$store.dispatch('checkAuth')
          .then(() => {

          })
          .catch((err) => {
            console.log(err  + 'error')
            this.$router.push('/')
          })
    }
  },
  beforeMount() {
    this.check()
  },
  mounted() {
    this.$root.$on('logout', () => {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/')
          })
    })
  }
}
</script>

<style>

</style>