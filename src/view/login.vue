<template>
  <div>
    <div class="title">
      <h1>Calendar</h1>
    </div>
    <v-form v-model="valid">
      <v-container class="card">
        <div class="text">
          Введите данные для входа:
        </div>
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
  </div>
</template>

<script>

export default {
  name: "login",
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
  width: 500px;
  display: block;
  background: #e7e7e7; /* Цвет фона */
  outline: 2px solid #000; /* Чёрная рамка */
  border: 3px solid #fff; /* Белая рамка */
  border-radius: 10px;
}

.buttons {
  margin-top: 20px;
}
.title{
  text-align: center;
  margin-top: 20px;
}
</style>