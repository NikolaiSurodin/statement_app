<template>
  <div>
    <div>
      <v-jumbotron
          :gradient="gradient"

          dark
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Календарь отпусков</h3>
              <div class="description">
                <b>
                  Введите данные для входа <br>

                </b>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
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
  </div>
</template>

<script>

export default {
  name: "login",
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
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
  margin-top: 20px;
  width: 500px;
  display: block;
  background: linear-gradient(#e66465, #9198e5); /* Цвет фона */
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