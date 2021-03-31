<template>
  <div class="wrapper">
    <template>
      <message-error
          v-if="error"
          @closePopup="closePopup"
      />
    </template>
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
                  Введите данные для входа: <br>
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
              type="password"
              required
          ></v-text-field>

          <div class="buttons">
            <v-btn type="submit" @click.prevent="submitLogin" :disabled="!valid">
              Войти!
              <i class="material-icons right">check_circle_outline</i>
            </v-btn>
            <v-btn type="button" to="/register">Регистрация</v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import messageError from "@/components/messageError";

export default {
  name: "login",
  components: {messageError},
  data() {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      valid: false,
      password: '',
      email: '',
      error: false,
      emailRules: [
        v => !!v || 'E-mail заполнить обязательно',
        v => /.+@.+/.test(v) || 'Проверьте, пожалуйста, E-mail',
      ],
      passwordRules: [
        v => !!v || 'Проверьте пароль!',
      ]
    }
  },
  methods: {
    submitLogin() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('submitLogin', user)
          .then(() => this.$router.push('/calendar'))
          .catch((error) => {
            console.log(error)
            this.error = !this.error
            this.email = ''
            this.password = ''
          })
    },
    closePopup() {
      this.error = false
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

.title {
  text-align: center;
  margin-top: 20px;
}

.wrapper {
  background-color: silver;
}
</style>