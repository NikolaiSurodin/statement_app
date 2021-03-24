<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
   async check() {
      await this.$store.dispatch('checkAuth')
      .then(() => {

      })
      .catch((err) => {
        console.log(err)
        this.$router.push('/register')
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
            this.$router.push('/register')
          })
    })
  }
}
</script>

<style>

</style>