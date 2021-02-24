<template>
  <div>
    <v-form v-model="valid">
      <v-container class="card">
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Пароль"
            required
        ></v-text-field>

        <div class="buttons">
          <button class="v-btn" @click="toCalendar" :disabled="!valid">Войти!</button>
        </div>
      </v-container>
    </v-form>
    <navigation />
  </div>
</template>

<script>

import Navigation from "@/view/navigation";

export default {
  name: "login",
  components: {Navigation},
  data: () => ({
    valid: false,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail заполнить обязательно',
      v => /.+@.+/.test(v) || 'Проверьте, пожалуйста, E-mail',
    ],
    passwordRules: [
      v => !!v || 'Проверьте пароль!',
    ]
  }),
  methods: {
    toCalendar() {
      this.$router.push('/calendar')
    }
  }
}


</script>

<style scoped>
.card {
  max-width: 500px;
  position: center;
  margin-top: 300px;
}

.buttons {
  margin-top: 20px;
}
</style>