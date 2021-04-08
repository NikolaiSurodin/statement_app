<template>
  <v-form>
    <v-container>
      <v-text-field
          label="Город"
      ></v-text-field>
      <v-text-field
          label="Описание"
          required
      ></v-text-field>

      <v-text-field
          label="Должность"
      ></v-text-field>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "description",
  data() {
    return {
      userModel:''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    this.$store.dispatch('infoUserById', this.$route.params.id)
        .then(() => {
          this.userModel = this.user
        })
  }
}
</script>

<style scoped>

</style>