<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="header-content">
          <h1>
            <i class="material-icons">account_circle</i>
            {{ user.profile.first_name }} {{ user.profile.last_name }}
          </h1>
          <h5>{{ user.email }}</h5>
        </div>
        <div class="popup__header">
          <slot></slot>
        </div>
        <div class="popup__content">
          <div>
            <div class="right">
            </div>
          </div>
        </div>
        <div class="popup__footer">
          <div class="container">
            <div class="bt">
              <v-btn color="warning" @click="ToUserProfile"
              > Редактировать профиль
                <i class="material-icons right">edit</i>
              </v-btn>
              <v-btn color="success" @click="closeProfile"
              > Закрыть
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
    ToUserProfile() {
      this.$router.push(`/editprofile/${this.user.id}`)
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  beforeMount() {
    return this.$store.dispatch('infoUser')
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
  padding: 150px;
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