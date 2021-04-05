<template>
  <div class="wrapper">
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
              v-model="user.username"
              :rules="usernameRules"
              :counter="10"
              label="User name"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.firstname"
              :rules="nameRules"
              :counter="10"
              label="Имя"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.lastname"
              :rules="nameRules"
              :counter="10"
              label="Фамилия"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              type="number"
              v-model="user.mobile"
              :rules="mobileRules"
              label="Телефон"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.password"
              :rules="passwordRules"
              label="Пароль"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.passwordConfirm"
              :rules="passwordConfirmRules"
              label="Повторите пароль"
              required
          ></v-text-field>
          <v-text-field
              v-model="user.birthday"
              label="День Рождения. Формат ГГГГ-ММ-ЧЧ"
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
      user: {
        firstname: '',
        lastname: '',
        email: '',
        mobile: 79,
        birthday: '',
        password: '',
        passwordConfirm: ''
      },

      nameRules: [
        v => !!v || 'Имя заполнить обязательно!',
        v => v.length <= 20 || 'Максимальное количество символов - 20',
      ],
      emailRules: [
        v => !!v || 'E-mail заполнить обязательно',
        v => /.+@.+/.test(v) || 'Проверьте, пожалуйста, E-mail',
      ],
      mobileRules: [
        v => !!v || 'Заполните номер телефона',
        v => /.79.+/.test && v.length === 11 || 'Проверьте, пожалуйста, телефон',
      ],
      usernameRules: [
        v => !!v || 'Заполнить обязательно!',
        v => v.length <= 20 || 'Максимальное количество символов - 20',
      ],
      passwordRules: [
        v => !!v || 'Введите пароль!',
        v => v.length >= 7 || 'Пароль должен содержать минимум 7 символов',
      ],
      passwordConfirmRules: [
        v => !!v || 'Повторите пароль!'
      ]
    }
  },
  computed:{
    error() {
      return this.$store.getters.error
    }
  },
  watch:{
    error(err){
      console.log(err)
    }
  },

  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    register() {
      const user = {
        username: this.user.username,
        password: this.user.password,
        email: this.user.email,
        birthday: this.user.birthday,
        profile: {
          description: '',
          title: '',
          first_name: this.user.firstname,
          last_name: '',
          mobile: this.user.mobile,
          city: '',
          country: '',
          region: '',
          state: '',
        }
      }
      if (this.user.passwordConfirm !== this.user.password) {
        this.user.password = ''
        this.user.passwordConfirm = ''
      } else {
        this.$store.dispatch('register', user)
            .then(() => this.$router.push('/login'))
            .catch((error) => {
              console.log(error)
            })
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
.wrapper{
  background-color: silver;
}
</style>