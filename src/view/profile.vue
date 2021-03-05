<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="header-content">
          <div class="page-title">
            <h3>Профиль</h3>
          </div>
        </div>
        <div class="popup__header">
          <slot></slot>
        </div>
        <div class="popup__content">
          <div>
            <form v-model="valid">
              <div>
                <v-text-field v-model="email"
                              :rules="emailRules"
                              required
                              label="Email"
                >Name
                </v-text-field>
                <v-text-field v-model="password"
                              :rules="passwordRules"
                              required
                              label="Пароль"
                >password
                </v-text-field>
              </div>
              <v-btn type="submit" @click.prevent="updateProfile" :disabled="!valid">
                Обновить
                <i class="material-icons right">send</i>
              </v-btn>
            </form>
          </div>
        </div>
        <div class="popup__footer">
          <div class="container">
            <div class="bt">
              <v-btn color="success" @click="closeProfile"
              > OK
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "profile",
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      error: false,
      emailRules: [
        v => /.+@.+/.test(v) || 'Проверьте, пожалуйста, E-mail',
      ],
      passwordRules: [
        v => v.length >= 7 || 'Пароль должен содержать минимум 7 символов'
      ]
    }
  },
  methods: {
    closeProfile() {
      this.$emit('closeProfileInfo')
    },
    updateProfile() {
      const updateUser = {
        email: this.email,
        password: this.password
      }
      this.email = ''
      this.password = ''
      console.log('click', updateUser)
    }
  }

}
</script>

<style scoped>
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.popup {
  padding: 60px;
  position: center;
  top: 500px;
  width: 700px;
  background: whitesmoke;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;

}

.header-content {
  text-align: center;
}

.bt {
  margin-top: 20px;
  margin-left: 120px;
}
</style>