<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="header-content">
          <div class="right">
            <h3>{{ user.username }}</h3>
          </div>
        </div>
        <div class="popup__header">
          <slot></slot>
        </div>
        <div class="popup__content">
          <div>
            <v-btn color="success"
            > Посмотреть всех сотрудников
            </v-btn>
          </div>

        </div>
        <div class="popup__footer">
          <div class="container">
            <div class="bt">
              <v-btn color="success" @click="closeProfile"
              > OK
              </v-btn>
              <router-link to="/userList">UserList</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      user: '',
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
  },
  created() {
    return new Promise(resolve => {
      axios({url: 'https://vacation-api.thirty3.tools/api/v1/admin/auth/me', method: 'GET'})
          .then(response => {
            this.user = response.data
            resolve(response)
          })
    })

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