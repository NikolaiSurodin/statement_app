<template>
  <v-form class="container"
          ref="form"
          v-model="valid"
          lazy-validation
  >
    <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Имя"
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
        type="text"
        v-model="address"
        :rules="addressRules"
        label="Адрес"
        required
    ></v-text-field>
    <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Проверьте данные']"
        label="Согласен с изменениями"
        required
    ></v-checkbox>

    <v-btn
        :disabled="!valid"
        color="success"
        @click="saveDataUser"
    >
      Отредактировать
    </v-btn>

    <v-btn
        color="error"
        @click="reset"
    >
      Очистить форму
    </v-btn>

    <v-btn
        color="warning"
        @click="goOut"
    >
      Отмена
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "editProfile",
  data: () => ({
    valid: true,
    name: '',
    mobile: ['79'],
    address: '',
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
      v => /.79.+/.test(v) && v.length === 12 || 'Проверьте, пожалуйста, телефон',
    ],
    addressRules: [
      v => !!v || 'Проверьте адрес'
    ]

  }),

  methods: {
    saveDataUser() {
      console.log('save')
    },
    reset() {
      this.$refs.form.reset()
    },
    goOut() {
      this.$router.push('/calendar')
    }
  }
}
</script>

<style scoped>
.container {
  position: center;
  margin-left: 50px;

}
</style>