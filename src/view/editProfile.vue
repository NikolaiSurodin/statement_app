<template>
  <div>
    <v-form v-model="valid">
      <v-container class="container card">
        <v-text-field
            v-model="user.username"
            :rules="nameRules"
            :counter="10"
            label="Имя"
            required
        ></v-text-field>

        <v-text-field
            v-model="user.profile.last_name"
            :rules="nameRules"
            :counter="10"
            label="Фамилия"
        ></v-text-field>

        <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            type="number"
            v-model="user.profile.mobile"
            :rules="mobileRules"
            label="Телефон"
            required
        ></v-text-field>

        <v-text-field
            v-model="user.birthday"
            :rules="birthdayRules"
            label="День рождения"
            required
        ></v-text-field>

        <v-text-field
            v-model="user.profile.country"
            label="Страна"
        ></v-text-field>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || '']"
            label="Согласен с изменениями"
            required
        ></v-checkbox>

        <div class="buttons">
          <button class="v-btn" type="button" @click="updateUser" :disabled="!valid">
            Отредактировать данные
            <i class="material-icons right">done</i>
          </button>
          <button class="v-btn" type="button" @click="goOut">
            Отмена
            <i class="material-icons right">highlight_off</i>
          </button>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "editProfile",
  data() {
    return {
      valid: true,
      user: {
        firstname: '',
        address: '',
        birthday: '',
        profile: {
          mobile: 79,
          lastname: '',
          country:''
        }
      },
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => (v && v.length <= 10) || 'Заполните имя'
      ],
      email: '',
      checkbox: false,
      emailRules: [
        v => !!v || 'E-mail обязательно',
        v => /.+@.+/.test(v) || 'E-mail неверный'
      ],
      mobileRules: [
        v => !!v || 'Заполните номер телефона',
        v => /.79.+/.test && v.length === 11 || 'Проверьте, пожалуйста, телефон',
      ],
      addressRules: [
        v => !!v || 'Проверьте адрес'
      ],
      birthdayRules: [
        v => !!v || 'Проверьте дату рождения'
      ]
    }
  },

  methods: {
    goOut() {
      this.$router.push('/calendar')
    },
    async info() {
      return await axios
          .get('https://vacation-api.thirty3.tools/api/v1/frontend/users/{id}?expand=profile'.replace('{id}', this.$route.params['id']))
          .then(response => {
            this.user = response.data
          })
    },
    async updateUser() {
      return await axios
          .patch('https://vacation-api.thirty3.tools/api/v1/frontend/me/{id}'.replace('{id}', this.$route.params['id']), this.user)
          .then(() => {
            this.$root.$emit('save')
            this.$router.push('/calendar')
          })
    }
  },
  mounted() {
    this.$store.dispatch('infoUser')
    this.info()
  }
}
</script>

<style scoped>
.container {
  position: center;
  margin-left: 50px;

}
</style>