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
            type="number"
            v-model="mobile"
            :rules="mobileRules"
            label="Телефон"
            required
        ></v-text-field>

        <v-text-field
            v-model="birthday"
            :rules="birthdayRules"
            label="День рождения"
            required
        ></v-text-field>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || '']"
            label="Согласен с изменениями"
            required
        ></v-checkbox>

        <div class="buttons">
          <button class="v-btn" type="button" @click="saveDataUser" :disabled="!valid">
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
export default {
  name: "editProfile",
  data() {
    return {
      valid: true,
      firstname: '',
      lastname: '',
      mobile: 79,
      address: '',
      birthday: '',
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
        v => (/.+79.+/.test && v.length) === 12 || 'Проверьте, пожалуйста, телефон',
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
    saveDataUser() {
      this.$router.push('/calendar')
    },
    goOut() {
      this.$router.push('/calendar')
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    this.$store.dispatch('infoUser')
  }
}
</script>

<style scoped>
.container {
  position: center;
  margin-left: 50px;

}
</style>