<template>
  <div>
    <div class="title">
      <h1>Добро пожаловать!</h1>
    </div>
    <div class="description">
      <b>
        Введите данные для регистрации и нажмите "Зарегистрироваться"<br>
        Если есть аккуант, нажмите "Войти"
      </b>
    </div>
    <v-form v-model="valid">
      <v-container class="card">
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
          <button class="v-btn" type="button" @click="toCalendar" :disabled="!valid">Зарегистрироваться!</button>
          <button class="v-btn" type="button" @click="ToLogin">Есть аккаунт! Войти!</button>
        </div>

      </v-container>
    </v-form>
  </div>
</template>

<script>

export default {
  name: "register",
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    password: '',
    passwordRepeat: '',
    nameRules: [
      v => !!v || 'Имя заполнить обязательно!',
      v => v.length <= 20 || 'Максимальное количество символов - 20',
    ],
    email: '',
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
  }),
  methods: {
    ToLogin() {
      this.$router.push('/login')
    },
    toCalendar() {
      if (this.passwordRepeat !== this.password) {
        this.password = ''
        this.passwordRepeat = ''
      } else {
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
  margin-top: 100px;
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
.description{
  text-align: center;
  margin-top: 50px;
}
</style>