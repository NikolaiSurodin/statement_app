<template>
  <div>
    <div>
      <v-jumbotron
          :gradient="gradient"
          :height="100"
          dark
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Добро пожаловать!</h3>
              <div class="description">
                <b>
                  Введите данные для регистрации и нажмите "Зарегистрироваться"<br>
                  Если есть аккуант, нажмите "Войти"
                </b>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>

      <v-form v-model="valid">
        <v-container class="container card">
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Имя"
              required
          ></v-text-field>

          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Фамилия"
              required
          ></v-text-field>

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

          <v-text-field
              v-model="passwordRepeat"
              :rules="passwordRepeatRules"
              label="Повторите пароль"
              required
          ></v-text-field>

          <div class="buttons">
            <button class="v-btn" type="button" @click="register" :disabled="!valid">Зарегистрироваться!</button>
            <button class="v-btn" type="button" @click="toLogin">
              Есть аккаунт! Войти!
              <i class="material-icons right">grade</i>
            </button>
          </div>

        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "register",
  data() {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      valid: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordRepeat: '',
      nameRules: [
        v => !!v || 'Имя заполнить обязательно!',
        v => v.length <= 20 || 'Максимальное количество символов - 20',
      ],
      emailRules: [
        v => !!v || 'E-mail заполнить обязательно',
        v => /.+@.+/.test(v) || 'Проверьте, пожалуйста, E-mail',
      ],
      passwordRules: [
        v => !!v || 'Введите пароль!',
        v => v.length >= 7 || 'Пароль должен содержать минимум 7 символов',
      ],
      passwordRepeatRules: [
        v => !!v || 'Повторите пароль!'
      ]
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    register() {
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        passwordRepeat: this.password
      }
      if (this.passwordRepeat !== this.password) {
        this.password = ''
        this.passwordRepeat = ''
      } else {
        //this.$store.dispatch('submitRegister', user)
        this.$router.push('/calendar')
      }
    }
  }
}


</script>

<style scoped>
.card {
  width: 500px;
  position: center;
  display: block;
  margin-top: 50px;
  background: linear-gradient(#e66465, #9198e5); /* Цвет фона */
  outline: 2px solid #000; /* Чёрная рамка */
  border: 3px solid #fff; /* Белая рамка */
  border-radius: 10px;
}

.buttons {
  margin-top: 20px;
}

.description {
  text-align: center;
  margin-top: 50px;
}
</style>